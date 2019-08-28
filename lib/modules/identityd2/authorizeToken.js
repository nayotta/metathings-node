const {
  AuthorizeTokenRequest
} = require('../../proto/identityd2/authorize_token_pb')

const {
  generateOpEntity,
  generateOpAction
} = require('./models')

/**
 *  生成 AuthorizeTokenRequest 数据
 *  message AuthorizeTokenRequest {
      OpEntity object = 1 [(validator.field) = {msg_exists: true}];
      OpAction action = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateAuthorizeTokenRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  if (!('action' in options)) {
    throw new Error('action is required!')
  }

  // 构建 authorizeTokenRequest
  const authorizeTokenRequest = new AuthorizeTokenRequest()

  const {
    object: objectVal,
    action: actionVal
  } = options

  // 处理对应数据类型
  const opEntity = generateOpEntity(objectVal)
  authorizeTokenRequest.setObject(opEntity)

  const opAction = generateOpAction(actionVal)
  authorizeTokenRequest.setAction(opAction)

  return authorizeTokenRequest
}

module.exports = {
  generateAuthorizeTokenRequest
}
