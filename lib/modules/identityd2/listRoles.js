const {
  ListRolesRequest,
  ListRolesResponse
} = require('../../proto/identityd2/list_roles_pb')

const {
  generateOpRole,
  generateRole
} = require('./models')

/**
 *  生成 ListRolesRequest 数据
 *  message ListRolesRequest {
      OpRole role = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListRolesRequest (options) {
  // 构建 listRolesRequest
  const listRolesRequest = new ListRolesRequest()

  // 处理对应数据类型
  if ('role' in options) {
    const roleVal = options.role
    const opRole = generateOpRole(roleVal)
    listRolesRequest.setRole(opRole)
  }

  return listRolesRequest
}

/**
 *  生成 ListRolesResponse 数据
 *  message ListRolesResponse {
      repeated Role roles = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListRolesResponse (options) {
  // 构建 listRolesResponse
  const listRolesResponse = new ListRolesResponse()

  // 处理对应数据类型
  if ('roles' in options) {
    const rolesVal = options.roles
    const roleslist = []
    rolesVal.forEach(item => {
      const role = generateRole(item)
      roleslist.push(role)
    })
    listRolesResponse.setRolesList(roleslist)
  }

  return listRolesResponse
}

module.exports = {
  generateListRolesRequest,
  generateListRolesResponse
}
