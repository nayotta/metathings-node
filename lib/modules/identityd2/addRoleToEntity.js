const {
  AddRoleToEntityRequest
} = require('../../proto/identityd2/add_role_to_entity_pb')

const {
  generateOpEntity,
  generateOpRole
} = require('./models')

/**
 *  生成 AddRoleToEntityRequest 数据
 *  message AddRoleToEntityRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
      OpRole role = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateAddRoleToEntityRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 addRoleToEntityRequest
  const addRoleToEntityRequest = new AddRoleToEntityRequest()

  const {
    entity: entityVal,
    role: roleVal
  } = options

  // 处理对应数据类型
  const opEntity = generateOpEntity(entityVal)
  addRoleToEntityRequest.setEntity(opEntity)

  const opRole = generateOpRole(roleVal)
  addRoleToEntityRequest.setRole(opRole)

  return addRoleToEntityRequest
}

module.exports = {
  generateAddRoleToEntityRequest
}
