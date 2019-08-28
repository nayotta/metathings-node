const {
  DeleteActionRequest
} = require('../../proto/identityd2/delete_action_pb')

const {
  generateOpAction
} = require('./models')

/**
 *  生成 DeleteActionRequest 数据
 *  message DeleteActionRequest {
      OpAction action = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateDeleteActionRequest (options) {
  if (!('action' in options)) {
    throw new Error('action is required!')
  }

  // 构建 deleteActionRequest
  const deleteActionRequest = new DeleteActionRequest()

  // 处理对应数据类型
  const actionVal = options.action
  const opAction = generateOpAction(actionVal)
  deleteActionRequest.setAction(opAction)

  return deleteActionRequest
}

module.exports = {
  generateDeleteActionRequest
}
