const path = require('path')
const grpc = require('@grpc/grpc-js')
const loader = require('@grpc/proto-loader')
const protobuf = require('protobufjs')
const { buildRequestMessage } = require('./helper')

const {
  IDLE,
  CONNECTING,
  READY,
  TRANSIENT_FAILURE,
  SHUTDOWN
} = grpc.connectivityState

/**
 *  Service
 *
 * @class Service
 */
class Service {
  constructor ({ serviceName, servicePath, host, domain, token, rootCerts, secure, clientOptions = {} }) {
    if (!serviceName) throw new Error('serviceName can not be empty')

    this._host = host
    this._token = token || ''
    this._serviceName = serviceName
    this._servicePath = servicePath
    this._metaData = new grpc.Metadata()
    if (rootCerts && rootCerts.byteLength === undefined) {
      throw new Error('rootCerts must be a buffer')
    }
    let channelCredentials = null
    const options = {}
    if (rootCerts) {
      channelCredentials = grpc.credentials.createSsl(rootCerts)
      if (domain) options['grpc.ssl_target_name_override'] = domain
    }
    if (secure) {
      channelCredentials = grpc.credentials.createSsl()
    }
    this._iProto = protobuf.Root.fromJSON(require(path.join(__dirname, `../jsons/${serviceName}_service_pb.json`)))
    const def = loader.loadSync(path.join(__dirname, `../jsons/${serviceName}_service_pb.json`), {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      arrays: true
    })
    const grpcObj = grpc.loadPackageDefinition(def)
    let Svc = grpcObj
    this._servicePath.forEach(item => {
      Svc = Svc[item]
    })
    this._client = new Svc(
      host,
      channelCredentials || grpc.credentials.createInsecure(),
      {
        ...options,
        ...clientOptions
      }
    )
  }

  /**
   * 获取client
   *
   * @memberof Service
   */
  get client () {
    return this._client
  }

  getClient () {
    return this._client
  }

  /**
   * 获取频道连接状态信息
   *
   * @memberof Service
   */
  getChannelConnectivityState () {
    if (!this._client) return new Error('miss client')
    const channel = this._client.getChannel()
    const state = channel.getConnectivityState(true)
    const stateDescs = ['IDLE', 'CONNECTING', 'READY', 'TRANSIENT_FAILURE', 'SHUTDOWN']
    return {
      state,
      desc: stateDescs[state] || 'UNKNOWN'
    }
  }

  /**
   *  获取token
   *
   * @memberof Service
   */
  get token () {
    return this._token
  }

  /**
   *  设置 token 属性
   *
   * @memberof Service
   */
  set token (token) {
    this._token = token
  }

  /**
   *  清除 token
   *
   * @memberof Service
   */
  clearToken () {
    this._token = ''
    if (this._metaData.get('authorization').length > 0) {
      this._metaData.remove('authorization')
    }
  }

  /**
   *  设置 token
   *
   * @param {*} token
   * @memberof Service
   */
  setToken (token) {
    this._token = token
  }

  /**
   * 根据传入配置，生成数据，发送请求
   *
   * @param {*} {
   *     method,
   *     data,
   *     header
   *   }
   * @returns
   * @memberof Service
   */
  send ({
    method,
    data,
    header,
    options = {},
    waitChannelReady = false
    // raw = false
  }) {
    try {
      if (!method) {
        return Promise.reject(new Error('method is required!'))
      }

      const {
        _token: token,
        _client: client,
        _iProto: iProto,
        _servicePath: servicePath,
        _metaData: metaData
      } = this

      if (!(method in client)) {
        return Promise.reject(new Error('method not found.'))
      }

      // check client connectivity state
      const channel = client.getChannel()
      const state = channel.getConnectivityState(true)
      const stateDescs = {
        [CONNECTING]: 'connecting',
        [TRANSIENT_FAILURE]: 'transient failure',
        [SHUTDOWN]: 'shutdown'
      }
      if ([CONNECTING, TRANSIENT_FAILURE, SHUTDOWN].includes(state)) {
        if (!waitChannelReady) {
          return Promise.reject(new Error(`client channel connectivity state is ${stateDescs[state] || state}`))
        }
        return new Promise((resolve, reject) => {
          channel.watchConnectivityState(state, Date.now() + 1000 * 10, async (err) => {
            if (err) {
              reject(err)
              return
            }
            const state = channel.getChannelConnectivityState(true)
            if ([IDLE, READY].includes(state)) {
              resolve(await this.send({
                method,
                data,
                header,
                options
              }))
            } else {
              return Promise.reject(new Error(`client channel connectivity state is ${stateDescs[state] || state}`))
            }
          })
        })
      }

      // 生成 request 数据结构
      const lookupTypePaths = JSON.parse(JSON.stringify(servicePath))
      lookupTypePaths.pop()
      lookupTypePaths.push(`${method}Request`)
      const MethodRequest = iProto.lookupType(`${lookupTypePaths.join('.')}`)
      const message = MethodRequest.create(buildRequestMessage(iProto, MethodRequest, data))

      // token 存在，则添加 authorization 字段
      if (token) {
        metaData.set('authorization', token)
      }
      // header 存在, 则遍历header属性往 metaData 设置
      if (header) {
        Object.keys(header).forEach(key => {
          const val = header[key]
          if (key.toLowerCase() === 'authorization') {
            metaData.set('authorization', val)
          } else {
            metaData.set(key, val)
          }
        })
      }

      return new Promise((resolve, reject) => {
        // 发送请求
        client[method](message, metaData, {
          ...{
            deadline: Date.now() + 1000 * 30
          },
          ...options
        }, function (err, res) {
          if (err) {
            reject(err)
            return
          }
          // raw ? resolve(res) : resolve(res.toObject())
          resolve(res)
        })
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  /**
   *  建立一个 流调用
   *
   * @param {*} {
   *     method
   *   }
   * @returns
   * @memberof Service
   */
  call ({
    method,
    data = {},
    options = {},
    waitChannelReady = false
  }) {
    try {
      if (!method) {
        return Promise.reject(new Error('method is required!'))
      }

      const {
        _token: token,
        _client: client,
        _metaData: metaData,
        _iProto: iProto,
        _servicePath: servicePath
      } = this

      if (!(method in client)) {
        return Promise.reject(new Error('method not found.'))
      }

      // check client connectivity state
      const channel = client.getChannel()
      const state = channel.getConnectivityState(true)
      const stateDescs = {
        [CONNECTING]: 'connecting',
        [TRANSIENT_FAILURE]: 'transient failure',
        [SHUTDOWN]: 'shutdown'
      }
      if ([CONNECTING, TRANSIENT_FAILURE, SHUTDOWN].includes(state)) {
        if (!waitChannelReady) {
          return Promise.reject(new Error(`client channel connectivity state is ${stateDescs[state] || state}`))
        }
        return new Promise((resolve, reject) => {
          channel.watchConnectivityState(state, Date.now() + 1000 * 10, async (err) => {
            if (err) {
              reject(err)
              return
            }
            const state = channel.getChannelConnectivityState(true)
            if ([IDLE, READY].includes(state)) {
              resolve(await this.call({
                method,
                data,
                options
              }))
            } else {
              return Promise.reject(new Error(`client channel connectivity state is ${stateDescs[state] || state}`))
            }
          })
        })
      }

      // token 存在，则添加 authorization 字段
      if (token) {
        metaData.set('authorization', token)
      } else {
        return Promise.reject(new Error('token not found.'))
      }

      // 生成 request 数据结构
      const lookupTypePaths = JSON.parse(JSON.stringify(servicePath))
      lookupTypePaths.pop()
      lookupTypePaths.push(`${method}Request`)
      const MethodRequest = iProto.lookupType(`${lookupTypePaths.join('.')}`)
      const message = MethodRequest.create(buildRequestMessage(iProto, MethodRequest, data))

      const callRes = client[method](message, metaData, {
        ...{
          deadline: Date.now() + 1000 * 30
        },
        ...options
      })

      return callRes
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

module.exports = Service
