const {
  DeleteDomainRequest
} = require('../../proto/identityd2/delete_domain_pb')

const {
  generateOpDomain
} = require('./models')

/**
 *  生成 DeleteDomainRequest 数据
 *  message DeleteDomainRequest {
      OpDomain domain = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateDeleteDomainRequest (options) {
  if (!('domain' in options)) {
    throw new Error('domain is required!')
  }

  // 构建 deleteDomainRequest
  const deleteDomainRequest = new DeleteDomainRequest()

  // 处理对应数据类型
  const domainVal = options.domain
  const opDomain = generateOpDomain(domainVal)
  deleteDomainRequest.setDomain(opDomain)

  return deleteDomainRequest
}

module.exports = {
  generateDeleteDomainRequest
}
