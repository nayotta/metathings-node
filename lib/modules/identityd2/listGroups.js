const {
  ListGroupsRequest,
  ListGroupsResponse
} = require('../../proto/identityd2/list_groups_pb')

const {
  generateOpGroup,
  generateGroup
} = require('./models')

/**
 *  生成 ListGroupsRequest 数据
 *  message ListGroupsRequest {
      OpGroup group = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListGroupsRequest (options) {
  // 构建 listGroupsRequest
  const listGroupsRequest = new ListGroupsRequest()

  // 处理对应数据类型
  if ('group' in options) {
    const groupVal = options.group
    const opGroup = generateOpGroup(groupVal)
    listGroupsRequest.setGroup(opGroup)
  }

  return listGroupsRequest
}

/**
 *  生成 ListGroupsResponse 数据
 *  message ListGroupsResponse {
      repeated Group groups = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListGroupsResponse (options) {
  // 构建 listGroupsResponse
  const listGroupsResponse = new ListGroupsResponse()

  // 处理对应数据类型
  if ('groups' in options) {
    const groupsVal = options.groups
    const groupslist = []
    groupsVal.forEach(item => {
      const group = generateGroup(item)
      groupslist.push(group)
    })
    listGroupsResponse.setGroupsList(groupslist)
  }

  return listGroupsResponse
}

module.exports = {
  generateListGroupsRequest,
  generateListGroupsResponse
}
