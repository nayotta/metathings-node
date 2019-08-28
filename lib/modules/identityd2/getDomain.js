const {
  GetDomainRequest,
  GetDomainResponse
} = require('../../proto/identityd2/get_domain_pb')

const {
  generateDomain,
  generateOpDomain
} = require('./models')

/**
 *  生成 GetDomainRequest 数据
 *  message GetDomainRequest {
      OpDomain domain = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetDomainRequest (options) {
  if (!('domain' in options)) {
    throw new Error('domain is required!')
  }

  // 构建 getDomainRequest
  const getDomainRequest = new GetDomainRequest()

  // 处理对应数据类型
  const domainVal = options.domain
  const opDomain = generateOpDomain(domainVal)
  getDomainRequest.setDomain(opDomain)

  return getDomainRequest
}

/**
 *  生成 GetDomainResponse 数据
 *  message GetDomainResponse {
      Domain domain = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetDomainResponse (options) {
  // 构建 getDomainResponse
  const getDomainResponse = new GetDomainResponse()

  // 处理对应数据类型
  if ('domain' in options) {
    const domainVal = options.domain
    const domain = generateDomain(domainVal)
    getDomainResponse.setDomain(domain)
  }

  return getDomainResponse
}

module.exports = {
  generateGetDomainRequest,
  generateGetDomainResponse
}
