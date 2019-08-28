const {
  RemoveSubjectFromGroupRequest
} = require('../../proto/identityd2/remove_subject_from_group_pb')

const {
  generateOpGroup,
  generateOpEntity
} = require('./models')

/**
 *  生成 RemoveSubjectFromGroupRequest 数据
 *  message RemoveSubjectFromGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
      OpEntity Subject = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRemoveSubjectFromGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  if (!('subject' in options)) {
    throw new Error('subject is required!')
  }

  // 构建 removeSubjectFromGroupRequest
  const removeSubjectFromGroupRequest = new RemoveSubjectFromGroupRequest()

  // 处理对应数据类型
  const {
    group: groupVal,
    subject: subjectVal
  } = options

  const opGroup = generateOpGroup(groupVal)
  removeSubjectFromGroupRequest.setGroup(opGroup)

  const opEntity = generateOpEntity(subjectVal)
  removeSubjectFromGroupRequest.setSubject(opEntity)

  return removeSubjectFromGroupRequest
}

module.exports = {
  generateRemoveSubjectFromGroupRequest
}
