const {
  RemoveObjectFromGroupRequest
} = require('../../proto/identityd2/remove_object_from_group_pb')

const {
  generateOpGroup,
  generateOpEntity
} = require('./models')

/**
 *  生成 RemoveObjectFromGroupRequest 数据
 *  message RemoveObjectFromGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
      OpEntity object = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRemoveObjectFromGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 removeObjectFromGroupRequest
  const removeObjectFromGroupRequest = new RemoveObjectFromGroupRequest()

  // 处理对应数据类型
  const {
    object: objectVal,
    group: groupVal
  } = options

  const opGroup = generateOpGroup(groupVal)
  removeObjectFromGroupRequest.setGroup(opGroup)

  const opEntity = generateOpEntity(objectVal)
  removeObjectFromGroupRequest.setObject(opEntity)

  return removeObjectFromGroupRequest
}

module.exports = {
  generateRemoveObjectFromGroupRequest
}
