const {
  DeleteGroupRequest
} = require('../../proto/identityd2/delete_group_pb')

const {
  generateOpGroup
} = require('./models')

/**
 *  生成 DeleteGroupRequest 数据
 *  message DeleteGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateDeleteGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  // 构建 deleteGroupRequest
  const deleteGroupRequest = new DeleteGroupRequest()

  // 处理对应数据类型
  const groupVal = options.group
  const opGroup = generateOpGroup(groupVal)
  deleteGroupRequest.setGroup(opGroup)

  return deleteGroupRequest
}

module.exports = {
  generateDeleteGroupRequest
}
