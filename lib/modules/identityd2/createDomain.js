const {
  CreateDomainRequest,
  CreateDomainResponse
} = require('../../proto/identityd2/create_domain_pb')

const {
  generateDomain,
  generateOpDomain
} = require('./models')

/**
 * 生成 CreateDomainRequest 数据
 *  message CreateDomainRequest {
      OpDomain domain = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateDomainRequest (options) {
  if (!('domain' in options)) {
    throw new Error('domain is required!')
  }

  // 构建 createDomainRequest
  const createDomainRequest = new CreateDomainRequest()

  // 处理对应数据类型
  const domainVal = options.domain
  const opDomain = generateOpDomain(domainVal)
  createDomainRequest.setDomain(opDomain)

  return createDomainRequest
}

/**
 *  生成 CreateDomainResponse 数据
 *  message CreateDomainResponse {
      Domain domain = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateDomainResponse (options) {
  // 构建 createDomainResponse
  const createDomainResponse = new CreateDomainResponse()

  // 处理对应数据类型
  if ('domain' in options) {
    const domainVal = options.domain
    const domain = generateDomain(domainVal)
    createDomainResponse.setDomain(domain)
  }

  return createDomainResponse
}

module.exports = {
  generateCreateDomainRequest,
  generateCreateDomainResponse
}
