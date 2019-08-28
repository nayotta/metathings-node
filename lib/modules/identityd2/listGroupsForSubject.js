const {
  ListGroupsForSubjectRequest,
  ListGroupsForSubjectResponse
} = require('../../proto/identityd2/list_groups_for_subject_pb')

const {
  generateOpEntity,
  generateGroup
} = require('./models')

/**
 *  生成 ListGroupsForSubjectRequest 数据
 *  message ListGroupsForSubjectRequest {
      OpEntity subject = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListGroupsForSubjectRequest (options) {
  if (!('subject' in options)) {
    throw new Error('subject is required!')
  }

  // 构建 listGroupsForSubjectRequest
  const listGroupsForSubjectRequest = new ListGroupsForSubjectRequest()

  // 处理对应数据类型
  const subjectVal = options.subject
  const opEntity = generateOpEntity(subjectVal)
  listGroupsForSubjectRequest.setSubject(opEntity)

  return listGroupsForSubjectRequest
}

/**
 *  生成 ListGroupsForSubjectResponse 数据
 *  message ListGroupsForSubjectResponse {
      repeated Group groups = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListGroupsForSubjectResponse (options) {
  // 构建 listGroupsForSubjectResponse
  const listGroupsForSubjectResponse = new ListGroupsForSubjectResponse()

  // 处理对应数据类型
  if ('groups' in options) {
    const groupsVal = options.groups
    const groupslist = []
    groupsVal.forEach(item => {
      const group = generateGroup(item)
      groupslist.push(group)
    })
    listGroupsForSubjectResponse.setGroupsList(groupslist)
  }

  return listGroupsForSubjectResponse
}

module.exports = {
  generateListGroupsForSubjectRequest,
  generateListGroupsForSubjectResponse
}
