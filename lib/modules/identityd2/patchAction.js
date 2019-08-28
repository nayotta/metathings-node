const {
  PatchActionRequest,
  PatchActionResponse
} = require('../../proto/identityd2/patch_action_pb')

const {
  generateOpAction,
  generateAction
} = require('./models')

/**
 * 生成 PatchActionRequest 数据
 *  message PatchActionRequest {
      OpAction action = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchActionRequest (options) {
  if (!('action' in options)) {
    throw new Error('action is required!')
  }

  // 构建 patchActionRequest
  const patchActionRequest = new PatchActionRequest()

  // 处理对应数据类型
  const actionVal = options.action
  const opAction = generateOpAction(actionVal)
  patchActionRequest.setAction(opAction)

  return patchActionRequest
}

/**
 *  生成 PatchActionResponse 数据
 *  message PatchActionResponse {
      Action action = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchActionResponse (options) {
  // 构建 patchActionResponse
  const patchActionResponse = new PatchActionResponse()

  // 处理对应数据类型
  if ('action' in options) {
    const actionVal = options.action
    const action = generateAction(actionVal)
    patchActionResponse.setAction(action)
  }

  return patchActionResponse
}

module.exports = {
  generatePatchActionRequest,
  generatePatchActionResponse
}
