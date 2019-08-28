const {
  GetCredentialRequest,
  GetCredentialResponse
} = require('../../proto/identityd2/get_credential_pb')

const {
  generateCredential,
  generateOpCredential
} = require('./models')

/**
 *  生成 GetCredentialRequest 数据
 *  message GetCredentialRequest {
      OpCredential credential = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetCredentialRequest (options) {
  if (!('credential' in options)) {
    throw new Error('credential is required!')
  }

  // 构建 getCredentialRequest
  const getCredentialRequest = new GetCredentialRequest()

  // 处理对应数据类型
  const credentialVal = options.credential
  const opCredential = generateOpCredential(credentialVal)
  getCredentialRequest.setCredential(opCredential)

  return getCredentialRequest
}

/**
 *  生成 GetCredentialResponse 数据
 *  message GetCredentialResponse {
      Credential credential = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetCredentialResponse (options) {
  // 构建 getCredentialResponse
  const getCredentialResponse = new GetCredentialResponse()

  // 处理对应数据类型
  if ('credential' in options) {
    const credentialVal = options.credential
    const credential = generateCredential(credentialVal)
    getCredentialResponse.setCredential(credential)
  }

  return getCredentialResponse
}

module.exports = {
  generateGetCredentialRequest,
  generateGetCredentialResponse
}
