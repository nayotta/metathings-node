const {
  IssueTokenByPasswordRequest,
  IssueTokenByPasswordResponse
} = require('../../proto/identityd2/issue_token_by_password_pb')

const {
  generateOpEntity,
  generateToken
} = require('./models')

/**
 *  生成 IssueTokenByPasswordRequest 数据
 *  message IssueTokenByPasswordRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateIssueTokenByPasswordRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  // 构建 issueTokenByPasswordRequest
  const issueTokenByPasswordRequest = new IssueTokenByPasswordRequest()

  // 处理对应数据类型
  const entityVal = options.entity
  const opEntity = generateOpEntity(entityVal)
  issueTokenByPasswordRequest.setEntity(opEntity)

  return issueTokenByPasswordRequest
}

/**
 *  生成 IssueTokenByPasswordResponse 数据
 *  message IssueTokenByPasswordResponse {
      Token token = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateIssueTokenByPasswordResponse (options) {
  // 构建 issueTokenByPasswordResponse
  const issueTokenByPasswordResponse = new IssueTokenByPasswordResponse()

  // 处理对应数据类型
  if ('token' in options) {
    const tokenVal = options.token
    const token = generateToken(tokenVal)
    issueTokenByPasswordResponse.setToken(token)
  }

  return issueTokenByPasswordResponse
}

module.exports = {
  generateIssueTokenByPasswordRequest,
  generateIssueTokenByPasswordResponse
}
