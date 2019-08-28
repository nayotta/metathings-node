const {
  GetGroupRequest,
  GetGroupResponse
} = require('../../proto/identityd2/get_group_pb')

const {
  generateGroup,
  generateOpGroup
} = require('./models')

/**
 *  生成 GetGroupRequest 数据
 *  message GetGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  // 构建 getGroupRequest
  const getGroupRequest = new GetGroupRequest()

  // 处理对应数据类型
  const groupVal = options.group
  const opGroup = generateOpGroup(groupVal)
  getGroupRequest.setGroup(opGroup)

  return getGroupRequest
}

/**
 *  生成 GetGroupResponse 数据
 *  message GetGroupResponse {
      Group group = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetGroupResponse (options) {
  // 构建 getGroupResponse
  const getGroupResponse = new GetGroupResponse()

  // 处理对应数据类型
  if ('group' in options) {
    const groupVal = options.group
    const group = generateGroup(groupVal)
    getGroupResponse.setGroup(group)
  }

  return getGroupResponse
}

module.exports = {
  generateGetGroupRequest,
  generateGetGroupResponse
}
