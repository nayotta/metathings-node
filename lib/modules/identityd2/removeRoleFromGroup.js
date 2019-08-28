const {
  RemoveRoleFromGroupRequest
} = require('../../proto/identityd2/remove_role_from_group_pb')

const {
  generateOpGroup,
  generateOpRole
} = require('./models')

/**
 *  生成 RemoveRoleFromGroupRequest 数据
 *  message RemoveRoleFromGroupRequest {
      OpGroup entity = 1 [(validator.field) = {msg_exists: true}];
      OpRole role = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRemoveRoleFromGroupRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 removeRoleFromGroupRequest
  const removeRoleFromGroupRequest = new RemoveRoleFromGroupRequest()

  // 处理对应数据类型
  const {
    group: groupVal,
    role: roleVal
  } = options

  const opGroup = generateOpGroup(groupVal)
  removeRoleFromGroupRequest.setGroup(opGroup)

  const opRole = generateOpRole(roleVal)
  removeRoleFromGroupRequest.setRole(opRole)

  return removeRoleFromGroupRequest
}

module.exports = {
  generateRemoveRoleFromGroupRequest
}
