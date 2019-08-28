const {
  AddActionToRoleRequest
} = require('../../proto/identityd2/add_action_to_role_pb')

const {
  generateOpAction,
  generateOpRole
} = require('./models')

/**
 *  生成 AddActionToRoleRequest 数据
 *  message AddActionToRoleRequest {
      OpAction action = 1 [(validator.field) = {msg_exists: true}];
      OpRole role = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateAddActionToRoleRequest (options) {
  if (!('action' in options)) {
    throw new Error('action is required!')
  }

  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 addActionToRoleRequest
  const addActionToRoleRequest = new AddActionToRoleRequest()

  const {
    action: actionVal,
    role: roleVal
  } = options

  // 处理对应数据类型
  const opAction = generateOpAction(actionVal)
  addActionToRoleRequest.setAction(opAction)

  const opRole = generateOpRole(roleVal)
  addActionToRoleRequest.setRole(opRole)

  return addActionToRoleRequest
}

module.exports = {
  generateAddActionToRoleRequest
}
