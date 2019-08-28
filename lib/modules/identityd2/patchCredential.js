const {
  PatchCredentialRequest,
  PatchCredentialResponse
} = require('../../proto/identityd2/patch_credential_pb')

const {
  generateOpCredential,
  generateCredential
} = require('./models')

/**
 * 生成 PatchCredentialRequest 数据
 *  message PatchCredentialRequest {
      OpCredential credential = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchCredentialRequest (options) {
  if (!('credential' in options)) {
    throw new Error('credential is required!')
  }

  // 构建 patchCredentialRequest
  const patchCredentialRequest = new PatchCredentialRequest()

  // 处理对应数据类型
  const credentialVal = options.credential
  const opCredential = generateOpCredential(credentialVal)
  patchCredentialRequest.setCredential(opCredential)

  return patchCredentialRequest
}

/**
 *  生成 PatchCredentialResponse 数据
 *  message PatchCredentialResponse {
      Credential credential = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchCredentialResponse (options) {
  // 构建 patchCredentialResponse
  const patchCredentialResponse = new PatchCredentialResponse()

  // 处理对应数据类型
  if ('credential' in options) {
    const credentialVal = options.credential
    const credential = generateCredential(credentialVal)
    patchCredentialResponse.setCredential(credential)
  }

  return patchCredentialResponse
}

module.exports = {
  generatePatchCredentialRequest,
  generatePatchCredentialResponse
}
