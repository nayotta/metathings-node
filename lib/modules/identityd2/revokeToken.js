const {
  RevokeTokenRequest
} = require('../../proto/identityd2/revoke_token_pb')

const {
  generateOpToken
} = require('./models')

/**
 *  生成 RevokeTokenRequest 数据
 *  message RevokeTokenRequest {
      OpToken token = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRevokeTokenRequest (options) {
  if (!('token' in options)) {
    throw new Error('token is required!')
  }

  // 构建 revokeTokenRequest
  const revokeTokenRequest = new RevokeTokenRequest()

  // 处理对应数据类型
  const tokenVal = options.token
  const opToken = generateOpToken(tokenVal)
  revokeTokenRequest.setToken(opToken)

  return revokeTokenRequest
}

module.exports = {
  generateRevokeTokenRequest
}
