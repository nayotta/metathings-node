const {
  CreateActionRequest,
  CreateActionResponse
} = require('../../proto/identityd2/create_action_pb')

const {
  generateAction,
  generateOpAction
} = require('./models')

/**
 * 生成 CreateActionRequest 数据
 *  message CreateActionRequest {
      OpAction action = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateActionRequest (options) {
  if (!('action' in options)) {
    throw new Error('action is required!')
  }

  // 构建 createActionRequest
  const createActionRequest = new CreateActionRequest()

  // 处理对应数据类型
  const actionVal = options.action
  const opAction = generateOpAction(actionVal)
  createActionRequest.setAction(opAction)

  return createActionRequest
}

/**
 *  生成 CreateActionResponse 数据
 *  message CreateActionResponse {
      Action action = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateActionResponse (options) {
  // 构建 createActionResponse
  const createActionResponse = new CreateActionResponse()

  // 处理对应数据类型
  if ('action' in options) {
    const actionVal = options.action
    const action = generateAction(actionVal)
    createActionResponse.setAction(action)
  }

  return createActionResponse
}

module.exports = {
  generateCreateActionRequest,
  generateCreateActionResponse
}
