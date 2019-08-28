const {
  AddRoleToGroupRequest
} = require('../../proto/identityd2/add_role_to_group_pb')

const {
  generateOpGroup,
  generateOpRole
} = require('./models')

/**
 *  生成 AddRoleToGroupRequest 数据
 *  message AddRoleToGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
      OpRole role = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateAddRoleToGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  if (!('role' in options)) {
    throw new Error('role is required!')
  }

  // 构建 addRoleToGroupRequest
  const addRoleToGroupRequest = new AddRoleToGroupRequest()

  const {
    group: groupVal,
    role: roleVal
  } = options

  // 处理对应数据类型
  const opGroup = generateOpGroup(groupVal)
  addRoleToGroupRequest.setGroup(opGroup)

  const opRole = generateOpRole(roleVal)
  addRoleToGroupRequest.setRole(opRole)

  return addRoleToGroupRequest
}

module.exports = {
  generateAddRoleToGroupRequest
}
