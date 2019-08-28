const {
  PatchRoleRequest,
  PatchActionResponse
} = require('../../proto/identityd2/patch_role_pb')

const {
  generateRole,
  generateOpRole
} = require('./models')

/**
 *  生成 PatchRoleRequest 数据
 *  message PatchRoleRequest {
      OpRole role = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchRoleRequest (options) {
  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 patchRoleRequest
  const patchRoleRequest = new PatchRoleRequest()

  // 处理对应数据类型
  const roleVal = options.role
  const opRole = generateOpRole(roleVal)
  patchRoleRequest.setAction(opRole)

  return patchRoleRequest
}

/**
 *  生成 PatchActionResponse 数据
 *  message PatchRoleResponse {
      Role role = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchActionResponse (options) {
  // 构建 patchActionResponse
  const patchActionResponse = new PatchActionResponse()

  // 处理对应数据类型
  if ('role' in options) {
    const roleVal = options.role
    const role = generateRole(roleVal)
    patchActionResponse.setAction(role)
  }

  return patchActionResponse
}

module.exports = {
  generatePatchRoleRequest,
  generatePatchActionResponse
}
