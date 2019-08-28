const {
  ListCredentialsRequest,
  ListCredentialsResponse
} = require('../../proto/identityd2/list_credentials_pb')

const {
  generateOpCredential,
  generateCredential
} = require('./models')

/**
 *  生成 ListCredentialsRequest 数据
 *  message ListCredentialsRequest {
      OpCredential credential = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListCredentialsRequest (options) {
  // 构建 listCredentialsRequest
  const listCredentialsRequest = new ListCredentialsRequest()

  // 处理对应数据类型
  if ('credential' in options) {
    const credentialVal = options.credential
    const opCredential = generateOpCredential(credentialVal)
    listCredentialsRequest.setCredential(opCredential)
  }

  return listCredentialsRequest
}

/**
 *  生成 ListCredentialsResponse 数据
 *  message ListCredentialsResponse {
      repeated Credential credentials = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListCredentialsResponse (options) {
  // 构建 listCredentialsResponse
  const listCredentialsResponse = new ListCredentialsResponse()

  // 处理对应数据类型
  if ('credentials' in options) {
    const credentialsVal = options.credentials
    const credentialsList = []
    credentialsVal.forEach(item => {
      const credential = generateCredential(item)
      credentialsList.push(credential)
    })
    listCredentialsResponse.setCredentialsList(credentialsList)
  }

  return listCredentialsResponse
}

module.exports = {
  generateListCredentialsRequest,
  generateListCredentialsResponse
}
