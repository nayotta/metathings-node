const {
  PatchDomainRequest,
  PatchDomainResponse
} = require('../../proto/identityd2/patch_domain_pb')

const {
  generateOpDomain,
  generateDomain
} = require('./models')

/**
 * 生成 PatchDomainRequest 数据
 *  message PatchDomainRequest {
      OpDomain domain = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchDomainRequest (options) {
  if (!('domain' in options)) {
    throw new Error('domain is required!')
  }

  // 构建 patchDomainRequest
  const patchDomainRequest = new PatchDomainRequest()

  // 处理对应数据类型
  const domainVal = options.domain
  const opDomain = generateOpDomain(domainVal)
  patchDomainRequest.setDomain(opDomain)

  return patchDomainRequest
}

/**
 *  生成 PatchDomainResponse 数据
 *  message PatchDomainResponse {
      Domain domain = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchDomainResponse (options) {
  // 构建 patchDomainResponse
  const patchDomainResponse = new PatchDomainResponse()

  // 处理对应数据类型
  if ('domain' in options) {
    const domainVal = options.domain
    const domain = generateDomain(domainVal)
    patchDomainResponse.setDomain(domain)
  }

  return patchDomainResponse
}

module.exports = {
  generatePatchDomainRequest,
  generatePatchDomainResponse
}
