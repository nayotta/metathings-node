const {
  ListGroupsForObjectRequest,
  ListGroupsForObjectResponse
} = require('../../proto/identityd2/list_groups_for_object_pb')

const {
  generateOpEntity,
  generateGroup
} = require('./models')

/**
 *  生成 ListGroupsForObjectRequest 数据
 *  message ListGroupsForObjectRequest {
      OpEntity object = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListGroupsForObjectRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 listGroupsForObjectRequest
  const listGroupsForObjectRequest = new ListGroupsForObjectRequest()

  // 处理对应数据类型
  const objectVal = options.object
  const opEntity = generateOpEntity(objectVal)
  listGroupsForObjectRequest.setObject(opEntity)

  return listGroupsForObjectRequest
}

/**
 *  生成 ListGroupsForObjectResponse 数据
 *  message ListGroupsForObjectResponse {
      repeated Group groups = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListGroupsForObjectResponse (options) {
  // 构建 listGroupsForObjectResponse
  const listGroupsForObjectResponse = new ListGroupsForObjectResponse()

  // 处理对应数据类型
  if ('groups' in options) {
    const groupsVal = options.groups
    const groupslist = []
    groupsVal.forEach(item => {
      const group = generateGroup(item)
      groupslist.push(group)
    })
    listGroupsForObjectResponse.setGroupsList(groupslist)
  }

  return listGroupsForObjectResponse
}

module.exports = {
  generateListGroupsForObjectRequest,
  generateListGroupsForObjectResponse
}
