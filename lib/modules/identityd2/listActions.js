const {
  ListActionsRequest,
  ListActionsResponse
} = require('../../proto/identityd2/list_actions_pb')

const {
  generateOpAction,
  generateAction
} = require('./models')

/**
 *  生成 ListActionsRequest 数据
 *  message ListActionsRequest {
      OpAction action = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListActionsRequest (options) {
  // 构建 listActionsRequest
  const listActionsRequest = new ListActionsRequest()

  // 处理对应数据类型
  if ('action' in options) {
    const actionVal = options.action
    const opAction = generateOpAction(actionVal)
    listActionsRequest.setAction(opAction)
  }

  return listActionsRequest
}

/**
 *  生成 ListActionsResponse 数据
 *  message ListActionsResponse {
      repeated Action actions = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListActionsResponse (options) {
  // 构建 listActionsResponse
  const listActionsResponse = new ListActionsResponse()

  // 处理对应数据类型
  if ('actions' in options) {
    const actionsVal = options.actions
    const actionslist = []
    actionsVal.forEach(item => {
      const action = generateAction(item)
      actionslist.push(action)
    })
    listActionsResponse.setActionsList(actionslist)
  }

  return listActionsResponse
}

module.exports = {
  generateListActionsRequest,
  generateListActionsResponse
}
