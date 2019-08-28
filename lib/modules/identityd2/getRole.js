const {
  GetRoleRequest,
  GetRoleResponse
} = require('../../proto/identityd2/get_role_pb')

const {
  generateRole,
  generateOpRole
} = require('./models')

/**
 *  生成 GetRoleRequest 数据
 *  message GetRoleRequest {
      OpRole role = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetRoleRequest (options) {
  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 getRoleRequest
  const getRoleRequest = new GetRoleRequest()

  // 处理对应数据类型
  const roleVal = options.role
  const opRole = generateOpRole(roleVal)
  getRoleRequest.setRole(opRole)

  return getRoleRequest
}

/**
 *  生成 GetRoleResponse 数据
 *  message GetRoleResponse {
      Role role = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetRoleResponse (options) {
  // 构建 getRoleResponse
  const getRoleResponse = new GetRoleResponse()

  // 处理对应数据类型
  if ('role' in options) {
    const roleVal = options.role
    const role = generateRole(roleVal)
    getRoleResponse.setRole(role)
  }

  return getRoleResponse
}

module.exports = {
  generateGetRoleRequest,
  generateGetRoleResponse
}
