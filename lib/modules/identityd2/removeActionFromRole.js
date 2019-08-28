const {
  RemoveActionFromRoleRequest
} = require('../../proto/identityd2/remove_action_from_role_pb')

const {
  generateOpAction,
  generateOpRole
} = require('./models')

/**
 *  生成 RemoveActionFromRoleRequest 数据
 *  message RemoveActionFromRoleRequest {
      OpAction action = 1 [(validator.field) = {msg_exists: true}];
      OpRole role = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRemoveActionFromRoleRequest (options) {
  if (!('action' in options)) {
    throw new Error('action is required!')
  }

  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 removeActionFromRoleRequest
  const removeActionFromRoleRequest = new RemoveActionFromRoleRequest()

  // 处理对应数据类型
  const {
    action: actionVal,
    role: roleVal
  } = options

  const opAction = generateOpAction(actionVal)
  removeActionFromRoleRequest.setAction(opAction)

  const opRole = generateOpRole(roleVal)
  removeActionFromRoleRequest.setRole(opRole)

  return removeActionFromRoleRequest
}

module.exports = {
  generateRemoveActionFromRoleRequest
}
