const {
  Int32Value
} = require('google-protobuf/google/protobuf/wrappers_pb')

const {
  CreateCredentialRequest,
  CreateCredentialResponse
} = require('../../proto/identityd2/create_credential_pb')

const {
  generateCredential,
  generateOpCredential
} = require('./models')

/**
 * 生成 CreateCredentialRequest 数据
 *  message CreateCredentialRequest {
      OpCredential credential = 1 [(validator.field) = {msg_exists: true}];
      google.protobuf.Int32Value secret_size = 2;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateCredentialRequest (options) {
  if (!('credential' in options)) {
    throw new Error('credential is required!')
  }

  // 构建 createCredentialRequest
  const createCredentialRequest = new CreateCredentialRequest()

  // 处理对应数据类型
  const credentialVal = options.credential
  const opCredential = generateOpCredential(credentialVal)
  createCredentialRequest.setCredential(opCredential)

  if ('secret_size' in options) {
    const secretSizeVal = options.secret_size
    const secretSize = new Int32Value()
    secretSize.setValue(secretSizeVal)
    createCredentialRequest.setSecretSize(secretSize)
  }

  return createCredentialRequest
}

/**
 *  生成 CreateCredentialResponse 数据
 *  message CreateCredentialResponse {
      Credential credential = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateCredentialResponse (options) {
  // 构建 createCredentialResponse
  const createCredentialResponse = new CreateCredentialResponse()

  // 处理对应数据类型
  if ('credential' in options) {
    const credentialVal = options.credential
    const credential = generateCredential(credentialVal)
    createCredentialResponse.setCredential(credential)
  }

  return createCredentialResponse
}

module.exports = {
  generateCreateCredentialRequest,
  generateCreateCredentialResponse
}
