const {
  RemoveRoleFromEntityRequest
} = require('../../proto/identityd2/remove_role_from_entity_pb')

const {
  generateOpEntity,
  generateOpRole
} = require('./models')

/**
 *  生成 RemoveRoleFromEntityRequest 数据
 *  message RemoveRoleFromEntityRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
      OpRole role = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRemoveRoleFromEntityRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 removeRoleFromEntityRequest
  const removeRoleFromEntityRequest = new RemoveRoleFromEntityRequest()

  // 处理对应数据类型
  const {
    entity: entityVal,
    role: roleVal
  } = options

  const opEntity = generateOpEntity(entityVal)
  removeRoleFromEntityRequest.setEntity(opEntity)

  const opRole = generateOpRole(roleVal)
  removeRoleFromEntityRequest.setRole(opRole)

  return removeRoleFromEntityRequest
}

module.exports = {
  generateRemoveRoleFromEntityRequest
}
