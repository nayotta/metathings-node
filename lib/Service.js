const path = require('path')
const grpc = require('grpc')
const protobuf = require('protobufjs')
const { buildRequestMessage } = require('./helper')

/**
 *  Service
 *
 * @class Service
 */
class Service {
  constructor ({ serviceName, servicePath, host, domain, token, rootCerts, secure, clientOptions = {} }) {
    if (!serviceName) return new Error('serviceName can not be empty')

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
    let iService = grpc.loadObject(this._iProto)
    servicePath.forEach(point => {
      iService = iService[point]
    })
    this._client = new iService(
      host,
      channelCredentials || grpc.credentials.createInsecure(),
      {
        ...options,
        ...clientOptions
      }
    )
  }

  /**
   *  获取token
   *
   * @memberof IdentitydService
   */
  get token () {
    return this._token
  }

  /**
   *  设置 token 属性
   *
   * @memberof IdentitydService
   */
  set token (token) {
    this._token = token
  }

  /**
   *  清除 token
   *
   * @memberof Identityd2Service
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
   * @memberof IdentitydService
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
   * @memberof Identityd2
   */
  send ({
    method,
    data,
    header,
    options = {},
    // raw = false
  }) {
    if (!method) {
      throw new Error('method is required!')
    }

    const {
      _token: token,
      _client: client,
      _iProto: iProto,
      _servicePath: servicePath,
      _metaData: metaData
    } = this

    if (!(method in client)) {
      throw new Error('method not found.')
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
  }

  /**
   *  建立一个 流调用
   *
   * @param {*} {
   *     method
   *   }
   * @returns
   * @memberof DevicedService
   */
  call ({
    method,
    data = {},
    options = {},
  }) {
    if (!method) {
      throw new Error('method is required!')
    }

    const {
      _token: token,
      _client: client,
      _metaData: metaData,
      _iProto: iProto,
      _servicePath: servicePath
    } = this

    if (!(method in client)) {
      throw new Error('method not found.')
    }

    // token 存在，则添加 authorization 字段
    if (token) {
      metaData.set('authorization', token)
    } else {
      throw new Error('token not found.')
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
  }

}

module.exports = Service
