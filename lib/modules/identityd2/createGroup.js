const {
  CreateGroupRequest,
  CreateGroupResponse
} = require('../../proto/identityd2/create_group_pb')

const {
  generateGroup,
  generateOpGroup
} = require('./models')

/**
 * 生成 CreateGroupRequest 数据
 *  message CreateGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  // 构建 createGroupRequest
  const createGroupRequest = new CreateGroupRequest()

  // 处理对应数据类型
  const groupVal = options.group
  const opGroup = generateOpGroup(groupVal)
  createGroupRequest.setGroup(opGroup)

  return createGroupRequest
}

/**
 *  生成 CreateGroupResponse 数据
 *  message CreateGroupResponse {
      Group group = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateGroupResponse (options) {
  // 构建 createGroupResponse
  const createGroupResponse = new CreateGroupResponse()

  // 处理对应数据类型
  if ('group' in options) {
    const groupVal = options.group
    const group = generateGroup(groupVal)
    createGroupResponse.setGroup(group)
  }

  return createGroupResponse
}

module.exports = {
  generateCreateGroupRequest,
  generateCreateGroupResponse
}
