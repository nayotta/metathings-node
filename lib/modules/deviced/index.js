const path = require('path')
const grpc = require('grpc')

const services = require('../../proto/deviced/service_grpc_pb')

const {
  Empty
} = require('google-protobuf/google/protobuf/empty_pb')

const {
  mapServiceDir,
  lowerCaseFirstLetter
} = require('../../helpers')

const METHOD_REQUESTS = mapServiceDir(path.join(__dirname))

const OTHER_REQUEST = {
  ShowDevice: new Empty()
}

const STREAM_CALLS = ['StreamCall', 'PullFrameFromFlow', 'PushFrameToFlow', 'GetObjectStreamingContent', 'Connect']

/**
 *  流调用
 *
 * @class StreamCall
 */
class StreamCall {
  constructor (call, request) {
    this._call = call
    this._request = request
  }

  /**
   *  发送数据
   *
   * @param {*} {
   *     data
   *   }
   * @memberof StreamCall
   */
  send ({
    data
  }) {
    const {
      _call: call,
      _request: request
    } = this
    if (request) {
      call.write(request(data))
    }
  }

  /**
   * 监听 流收到数据
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onData (callback) {
    this._call.on('data', callback)
  }

  /**
   *  监听流 错误 事件
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onError (callback) {
    this._call.on('error', callback)
  }

  /**
   *  监听流 状态变化事件
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onStatus (callback) {
    this._call.on('status', callback)
  }

  /**
   *  监听 流 关闭事件
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onEnd (callback) {
    this._call.on('end', callback)
  }

  /**
   *  结束流
   *
   * @memberof StreamCall
   */
  end () {
    this._call.end()
  }
}

/**
 *  DevicedService
 *
 * @class Identityd2
 */
class DevicedService {
  constructor ({ host, domain, token, rootCerts, secure }) {
    this._host = host
    this._token = token || ''
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
    this._client = new services.DevicedServiceClient(host, channelCredentials || grpc.credentials.createInsecure(), options)
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
   * @memberof DevicedService
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
    data = {}
  }) {
    if (!method) {
      throw new Error('method is required!')
    }

    if (!STREAM_CALLS.includes(method)) {
      throw new Error(`${method} is not a stream call.`)
    }

    const {
      _token: token,
      _client: client,
      _metaData: metaData
    } = this

    if (!(lowerCaseFirstLetter(method) in client)) {
      throw new Error('method not found.')
    }

    // token 存在，则添加 authorization 字段
    if (token) {
      metaData.set('authorization', token)
    } else {
      throw new Error('token not found.')
    }

    // 生成 request 数据结构
    const key = `generate${method}Request`
    const request = METHOD_REQUESTS[key]
    // 该方式调用后 得到单向 的流
    if (method === 'PullFrameFromFlow') {
      const requestData = request(data)
      const pCall = client[lowerCaseFirstLetter(method)](requestData, metaData)
      return new StreamCall(pCall)
    }

    const call = client[lowerCaseFirstLetter(method)](metaData)

    return new StreamCall(call, request)
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
    raw = false
  }) {
    if (!method) {
      throw new Error('method is required!')
    }

    if (STREAM_CALLS.includes(method)) {
      throw new Error(`${method} is a stream call.`)
    }

    const {
      _token: token,
      _client: client,
      _metaData: metaData
    } = this

    if (!(lowerCaseFirstLetter(method) in client)) {
      throw new Error('method not found.')
    }

    // 生成 request 数据结构
    const key = `generate${method}Request`
    let requestData = {}
    if (key in METHOD_REQUESTS) {
      requestData = METHOD_REQUESTS[key](data)
    } else {
      requestData = OTHER_REQUEST[method]
    }

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
      client[lowerCaseFirstLetter(method)](requestData, metaData, function (err, res) {
        if (err) {
          reject(err)
          return
        }
        raw ? resolve(res) : resolve(res.toObject())
      })
    })
  }
}

module.exports = DevicedService
