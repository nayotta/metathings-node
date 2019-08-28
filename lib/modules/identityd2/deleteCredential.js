const {
  DeleteCredentialRequest
} = require('../../proto/identityd2/delete_credential_pb')

const {
  generateOpCredential
} = require('./models')

/**
 *  生成 DeleteCredentialRequest 数据
 *  message DeleteCredentialRequest {
      OpCredential credential = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateDeleteCredentialRequest (options) {
  if (!('credential' in options)) {
    throw new Error('credential is required!')
  }

  // 构建 deleteCredentialRequest
  const deleteCredentialRequest = new DeleteCredentialRequest()

  // 处理对应数据类型
  const credentialVal = options.credential
  const opCredential = generateOpCredential(credentialVal)
  deleteCredentialRequest.setCredential(opCredential)

  return deleteCredentialRequest
}

module.exports = {
  generateDeleteCredentialRequest
}
