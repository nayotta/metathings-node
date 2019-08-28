const {
  CheckTokenRequest
} = require('../../proto/identityd2/check_token_pb')

const {
  generateOpToken
} = require('./models')

/**
 *  生成 CheckTokenRequest 数据
 *  message CheckTokenRequest {
      OpToken token = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCheckTokenRequest (options) {
  if (!('token' in options)) {
    throw new Error('token is required!')
  }

  // 构建 checkTokenRequest
  const checkTokenRequest = new CheckTokenRequest()

  // 处理对应数据类型
  const tokenVal = options.token
  const opToken = generateOpToken(tokenVal)
  checkTokenRequest.setToken(opToken)

  return checkTokenRequest
}

module.exports = {
  generateCheckTokenRequest
}
