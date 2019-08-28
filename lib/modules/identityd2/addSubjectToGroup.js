const {
  AddSubjectToGroupRequest
} = require('../../proto/identityd2/add_subject_to_group_pb')

const {
  generateOpGroup,
  generateOpEntity
} = require('./models')

/**
 *  生成 AddSubjectToGroupRequest 数据
 *  message AddSubjectToGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
      OpEntity subject = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateAddSubjectToGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  if (!('subject' in options)) {
    throw new Error('subject is required!')
  }

  // 构建 addSubjectToGroupRequest
  const addSubjectToGroupRequest = new AddSubjectToGroupRequest()

  const {
    group: groupVal,
    subject: subjectVal
  } = options

  // 处理对应数据类型
  const opGroup = generateOpGroup(groupVal)
  addSubjectToGroupRequest.setGroup(opGroup)

  const opEntity = generateOpEntity(subjectVal)
  addSubjectToGroupRequest.setSubject(opEntity)

  return addSubjectToGroupRequest
}

module.exports = {
  generateAddSubjectToGroupRequest
}
