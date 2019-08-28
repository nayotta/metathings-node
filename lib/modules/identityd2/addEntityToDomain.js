const {
  AddEntityToDomainRequest
} = require('../../proto/identityd2/add_entity_to_domain_pb')

const {
  generateOpDomain,
  generateOpEntity
} = require('./models')

/**
 *  生成 AddEntityToDomainRequest 数据
 *  message AddEntityToDomainRequest {
      OpDomain domain = 1 [(validator.field) = {msg_exists: true}];
      OpEntity entity = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateAddEntityToDomainRequest (options) {
  if (!('domain' in options)) {
    throw new Error('domain is required!')
  }

  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  // 构建 addEntityToDomainRequest
  const addEntityToDomainRequest = new AddEntityToDomainRequest()

  const {
    entity: entityVal,
    domain: domainVal
  } = options

  // 处理对应数据类型
  const opDomain = generateOpDomain(domainVal)
  addEntityToDomainRequest.setDomain(opDomain)

  const opEntity = generateOpEntity(entityVal)
  addEntityToDomainRequest.setEntity(opEntity)

  return addEntityToDomainRequest
}

module.exports = {
  generateAddEntityToDomainRequest
}
