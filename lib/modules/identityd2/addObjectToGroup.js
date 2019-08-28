const {
  AddObjectToGroupRequest
} = require('../../proto/identityd2/add_object_to_group_pb')

const {
  generateOpGroup,
  generateOpEntity
} = require('./models')

/**
 *  生成 AddObjectToGroupRequest 数据
 *  message AddObjectToGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
      OpEntity object = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateAddObjectToGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 addObjectToGroupRequest
  const addObjectToGroupRequest = new AddObjectToGroupRequest()

  const {
    group: groupVal,
    object: objectVal
  } = options

  // 处理对应数据类型
  const opGroup = generateOpGroup(groupVal)
  addObjectToGroupRequest.setGroup(opGroup)

  const opEntity = generateOpEntity(objectVal)
  addObjectToGroupRequest.setObject(opEntity)

  return addObjectToGroupRequest
}

module.exports = {
  generateAddObjectToGroupRequest
}
