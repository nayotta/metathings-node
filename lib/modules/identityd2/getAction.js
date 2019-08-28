const {
  GetActionRequest,
  GetActionResponse
} = require('../../proto/identityd2/get_action_pb')

const {
  generateAction,
  generateOpAction
} = require('./models')

/**
 *  生成 GetActionRequest 数据
 *  message GetActionRequest {
      OpAction action = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetActionRequest (options) {
  if (!('action' in options)) {
    throw new Error('action is required!')
  }

  // 构建 getActionRequest
  const getActionRequest = new GetActionRequest()

  // 处理对应数据类型
  const actionVal = options.action
  const opAction = generateOpAction(actionVal)
  getActionRequest.setAction(opAction)

  return getActionRequest
}

/**
 *  生成 GetActionResponse 数据
 *  message GetActionResponse {
      Action action = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetActionResponse (options) {
  // 构建 getActionResponse
  const getActionResponse = new GetActionResponse()

  // 处理对应数据类型
  if ('action' in options) {
    const actionVal = options.action
    const action = generateAction(actionVal)
    getActionResponse.setAction(action)
  }

  return getActionResponse
}

module.exports = {
  generateGetActionRequest,
  generateGetActionResponse
}
