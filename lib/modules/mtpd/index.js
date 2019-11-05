const path = require('path')
const grpc = require('grpc')

const {
  mapServiceDir,
  lowerCaseFirstLetter
} = require('../../helpers')

const METHOD_REQUESTS = mapServiceDir(path.join(__dirname))

const services = require('../../proto/mtpd/service_grpc_pb')

/**
 *  MetaPlatformSrvService
 *
 * @class MetaPlatformSrvService
 */
class MetaPlatformSrvService {
  constructor (host, domain, token, rootCerts) {
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
    this._client = new services.MetaPlatformSrvClient(host, channelCredentials || grpc.credentials.createInsecure(), options)
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
   *  设置 token
   *
   * @param {*} token
   * @memberof IdentitydService
   */
  setToken (token) {
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

    const {
      _token: token,
      _client: client,
      _metaData: metaData
    } = this

    // token 存在，则添加 authorization 字段
    if (token) {
      metaData.set('authorization', token)
    }
    // header 存在, 则遍历header属性往 metaData 设置
    if (header) {
      Object.keys(header).forEach(key => {
        const val = header[key]
        if (key === 'authorization') {
          metaData.set('authorization', val)
        } else {
          metaData.set(key, val)
        }
      })
    }

    if (!(lowerCaseFirstLetter(method) in client)) {
      throw new Error('method not found.')
    }

    // 生成 request 数据结构
    const key = `generate${method}Request`
    const requestData = METHOD_REQUESTS[key](data)

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

module.exports = MetaPlatformSrvService
