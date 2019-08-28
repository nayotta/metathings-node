const {
  RemoveEntityFromDomainRequest
} = require('../../proto/identityd2/remove_entity_from_domain_pb')

const {
  generateOpEntity,
  generateOpDomain
} = require('./models')

/**
 *  生成 RemoveEntityFromDomainRequest 数据
 *  message RemoveEntityFromDomainRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
      OpDomain domain = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRemoveEntityFromDomainRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  if (!('domain' in options)) {
    throw new Error('domain is required!')
  }

  // 构建 removeEntityFromDomainRequest
  const removeEntityFromDomainRequest = new RemoveEntityFromDomainRequest()

  // 处理对应数据类型
  const {
    entity: entityVal,
    domain: domainVal
  } = options

  const opEntity = generateOpEntity(entityVal)
  removeEntityFromDomainRequest.setEntity(opEntity)

  const opDomain = generateOpDomain(domainVal)
  removeEntityFromDomainRequest.setDomain(opDomain)

  return removeEntityFromDomainRequest
}

module.exports = {
  generateRemoveEntityFromDomainRequest
}
