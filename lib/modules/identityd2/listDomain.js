const {
  ListDomainsRequest,
  ListDomainsResponse
} = require('../../proto/identityd2/list_domains_pb')

const {
  generateOpDomain,
  generateDomain
} = require('./models')

/**
 *  生成 ListDomainsRequest 数据
 *  message ListDomainsRequest {
      OpDomain domain = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListDomainsRequest (options) {
  // 构建 listDomainsRequest
  const listDomainsRequest = new ListDomainsRequest()

  // 处理对应数据类型
  if ('domain' in options) {
    const domainVal = options.domain
    const opDomain = generateOpDomain(domainVal)
    listDomainsRequest.setDomain(opDomain)
  }

  return listDomainsRequest
}

/**
 *  生成 ListDomainsResponse 数据
 *  message ListDomainsResponse {
      repeated Domain domains = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListDomainsResponse (options) {
  // 构建 listDomainsResponse
  const listDomainsResponse = new ListDomainsResponse()

  // 处理对应数据类型
  if ('domains' in options) {
    const domainsVal = options.domains
    const domainslist = []
    domainsVal.forEach(item => {
      const domain = generateDomain(item)
      domainslist.push(domain)
    })
    listDomainsResponse.setDomainsList(domainslist)
  }

  return listDomainsResponse
}

module.exports = {
  generateListDomainsRequest,
  generateListDomainsResponse
}
