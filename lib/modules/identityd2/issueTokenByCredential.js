const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')
const {
  Int64Value,
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb')

const {
  IssueTokenByCredentialRequest,
  IssueTokenByCredentialResponse
} = require('../../proto/identityd2/issue_token_by_credential_pb')

const {
  generateOpCredential,
  generateToken
} = require('./models')

/**
 *  生成 IssueTokenByCredentialRequest 数据
 *  message IssueTokenByCredentialRequest {
      OpCredential credential = 1 [(validator.field) = {msg_exists: true}];
      google.protobuf.Timestamp timestamp = 2 [(validator.field) = {msg_exists: true}];
      google.protobuf.Int64Value nonce = 3 [(validator.field) = {msg_exists: true}];
      google.protobuf.StringValue hmac = 4 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateIssueTokenByCredentialRequest (options) {
  if (!('credential' in options)) {
    throw new Error('credential is required!')
  }

  if (!('timestamp' in options)) {
    throw new Error('timestamp is required!')
  }

  if (!('nonce' in options)) {
    throw new Error('nonce is required!')
  }

  if (!('hmac' in options)) {
    throw new Error('hmac is required!')
  }

  // 构建 issueTokenByCredentialRequest
  const issueTokenByCredentialRequest = new IssueTokenByCredentialRequest()

  const {
    credential: credentialVal,
    timestamp: timestampVal,
    nonce: nonceVal,
    hmac: hmacVal
  } = options

  // 处理对应数据类型
  const opCredential = generateOpCredential(credentialVal)
  issueTokenByCredentialRequest.setCredential(opCredential)

  // 处理 timestamp 字段，为 Timestamp 类型
  const timestampTemp = new Timestamp()
  timestampTemp.fromDate(timestampVal)
  issueTokenByCredentialRequest.setTimestamp(timestampTemp)

  // 处理 nonce 字段，为 google.protobuf.Int64Value 类型
  const nonceTemp = new Int64Value()
  nonceTemp.setValue(nonceVal)
  issueTokenByCredentialRequest.setNonce(nonceTemp)

  // 处理 hmac 字段，为 google.protobuf.StringValue 类型
  const hmacTemp = new StringValue()
  hmacTemp.setValue(hmacVal)
  issueTokenByCredentialRequest.setHmac(hmacTemp)

  return issueTokenByCredentialRequest
}

/**
 *  生成 IssueTokenByCredentialResponse 数据
 *  message IssueTokenByCredentialResponse {
      Token token = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateIssueTokenByCredentialResponse (options) {
  // 构建 issueTokenByCredentialResponse
  const issueTokenByCredentialResponse = new IssueTokenByCredentialResponse()

  // 处理对应数据类型
  if ('token' in options) {
    const tokenVal = options.token
    const token = generateToken(tokenVal)
    issueTokenByCredentialResponse.setToken(token)
  }

  return issueTokenByCredentialResponse
}

module.exports = {
  generateIssueTokenByCredentialRequest,
  generateIssueTokenByCredentialResponse
}
