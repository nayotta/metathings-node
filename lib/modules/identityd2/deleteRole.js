const {
  DeleteRoleRequest
} = require('../../proto/identityd2/delete_role_pb')

const {
  generateOpRole
} = require('./models')

/**
 *  生成 DeleteRoleRequest 数据
 *  message DeleteRoleRequest {
      OpRole role = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateDeleteRoleRequest (options) {
  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 deleteRoleRequest
  const deleteRoleRequest = new DeleteRoleRequest()

  // 处理对应数据类型
  const roleVal = options.role
  const opRole = generateOpRole(roleVal)
  deleteRoleRequest.setRole(opRole)

  return deleteRoleRequest
}

module.exports = {
  generateDeleteRoleRequest
}
