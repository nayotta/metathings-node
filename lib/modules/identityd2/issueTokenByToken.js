const {
  IssueTokenByTokenRequest,
  IssueTokenByTokenResponse
} = require('../../proto/identityd2/issue_token_by_token_pb')

const {
  generateOpToken,
  generateToken
} = require('./models')

/**
 *  生成 IssueTokenByTokenRequest 数据
 *  message IssueTokenByTokenRequest {
      OpToken token = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateIssueTokenByTokenRequest (options) {
  if (!('token' in options)) {
    throw new Error('token is required!')
  }

  // 构建 issueTokenByTokenRequest
  const issueTokenByTokenRequest = new IssueTokenByTokenRequest()

  // 处理对应数据类型
  const tokenVal = options.token
  const opToken = generateOpToken(tokenVal)
  issueTokenByTokenRequest.setToken(opToken)

  return issueTokenByTokenRequest
}

/**
 *  生成 IssueTokenByTokenResponse 数据
 *  message IssueTokenByTokenResponse {
      Token token = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateIssueTokenByTokenResponse (options) {
  // 构建 issueTokenByTokenResponse
  const issueTokenByTokenResponse = new IssueTokenByTokenResponse()

  // 处理对应数据类型
  if ('token' in options) {
    const tokenVal = options.token
    const token = generateToken(tokenVal)
    issueTokenByTokenResponse.setToken(token)
  }

  return issueTokenByTokenResponse
}

module.exports = {
  generateIssueTokenByTokenRequest,
  generateIssueTokenByTokenResponse
}
