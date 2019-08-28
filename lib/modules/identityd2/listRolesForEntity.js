const {
  ListRolesForEntityRequest,
  ListRolesForEntityResponse
} = require('../../proto/identityd2/list_roles_for_entity_pb')

const {
  generateOpRole,
  generateRole
} = require('./models')

/**
 *  生成 ListRolesForEntityRequest 数据
 *  message ListRolesForEntityRequest {
      OpRole role = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListRolesForEntityRequest (options) {
  // 构建 listRolesForEntityRequest
  const listRolesForEntityRequest = new ListRolesForEntityRequest()

  // 处理对应数据类型
  if ('role' in options) {
    const roleVal = options.role
    const opRole = generateOpRole(roleVal)
    listRolesForEntityRequest.setRole(opRole)
  }

  return listRolesForEntityRequest
}

/**
 *  生成 ListRolesForEntityResponse 数据
 *  message ListRolesForEntityResponse {
      repeated Role Roles = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListRolesForEntityResponse (options) {
  // 构建 listRolesForEntityResponse
  const listRolesForEntityResponse = new ListRolesForEntityResponse()

  // 处理对应数据类型
  if ('roles' in options) {
    const rolesVal = options.roles
    const rolesList = []
    rolesVal.forEach(item => {
      const role = generateRole(item)
      rolesList.push(role)
    })
    listRolesForEntityResponse.setRolesList(rolesList)
  }

  return listRolesForEntityResponse
}

module.exports = {
  generateListRolesForEntityRequest,
  generateListRolesForEntityResponse
}
