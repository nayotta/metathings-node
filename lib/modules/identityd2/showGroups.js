const {
  ShowGroupsResponse
} = require('../../proto/identityd2/show_groups_pb')

const {
  generateGroup
} = require('./models')

/**
 *  生成 ShowGroupsResponse 数据
 *  message ShowGroupsResponse {
      repeated Group groups = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateShowGroupsResponse (options) {
  // 构建 showGroupsResponse
  const showGroupsResponse = new ShowGroupsResponse()

  // 处理对应数据类型
  if ('groups' in options) {
    const groupsVal = options.groups
    const groupsList = []
    groupsVal.forEach(item => {
      const group = generateGroup(item)
      groupsList.push(group)
    })
    showGroupsResponse.setGroupsList(groupsList)
  }

  return showGroupsResponse
}

module.exports = {
  generateShowGroupsResponse
}
