const {
  CreateRoleRequest,
  CreateActionResponse
} = require('../../proto/identityd2/create_role_pb')

const {
  generateRole,
  generateOpRole
} = require('./models')

/**
 *  生成 CreateRoleRequest 数据
 *  message CreateRoleRequest {
      OpRole role = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateRoleRequest (options) {
  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 createRoleRequest
  const createRoleRequest = new CreateRoleRequest()

  // 处理对应数据类型
  const roleVal = options.role
  const opRole = generateOpRole(roleVal)
  createRoleRequest.setRole(opRole)

  return createRoleRequest
}

/**
 *  生成 CreateActionResponse 数据
 *  message CreateRoleResponse {
      Role role = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateActionResponse (options) {
  // 构建 createActionResponse
  const createActionResponse = new CreateActionResponse()

  // 处理对应数据类型
  if ('role' in options) {
    const roleVal = options.role
    const role = generateRole(roleVal)
    createActionResponse.setRole(role)
  }

  return createActionResponse
}

module.exports = {
  generateCreateRoleRequest,
  generateCreateActionResponse
}
