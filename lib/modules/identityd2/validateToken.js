const {
  ValidateTokenRequest,
  ValidateTokenResponse
} = require('../../proto/identityd2/validate_token_pb')

const {
  generateOpToken,
  generateToken
} = require('./models')

/**
 *  生成 ValidateTokenRequest 数据
 *  message ValidateTokenRequest {
      OpToken token = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateValidateTokenRequest (options) {
  if (!('token' in options)) {
    throw new Error('token is required!')
  }

  // 构建 validateTokenRequest
  const validateTokenRequest = new ValidateTokenRequest()

  // 处理对应数据类型
  const tokenVal = options.token
  const opToken = generateOpToken(tokenVal)
  validateTokenRequest.setToken(opToken)

  return validateTokenRequest
}

/**
 *  生成 ValidateTokenResponse 数据
 *  message ValidateTokenResponse {
      Token token = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateValidateTokenResponse (options) {
  // 构建 validateTokenResponse
  const validateTokenResponse = new ValidateTokenResponse()

  // 处理对应数据类型
  if ('token' in options) {
    const tokenVal = options.token
    const token = generateToken(tokenVal)
    validateTokenResponse.setToken(token)
  }

  return validateTokenResponse
}

module.exports = {
  generateValidateTokenRequest,
  generateValidateTokenResponse
}
