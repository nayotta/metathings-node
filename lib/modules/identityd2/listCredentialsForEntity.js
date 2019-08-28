const {
  ListCredentialsForEntityRequest,
  ListCredentialsForEntityResponse
} = require('../../proto/identityd2/list_credentials_for_entity_pb')

const {
  generateOpEntity,
  generateCredential
} = require('./models')

/**
 *  生成 ListCredentialsForEntityRequest 数据
 *  message ListCredentialsForEntityRequest {
      OpEntity entity = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListCredentialsForEntityRequest (options) {
  // 构建 listCredentialsForEntityRequest
  const listCredentialsForEntityRequest = new ListCredentialsForEntityRequest()

  // 处理对应数据类型
  if ('entity' in options) {
    const entityVal = options.entity
    const opEntity = generateOpEntity(entityVal)
    listCredentialsForEntityRequest.setEntity(opEntity)
  }

  return listCredentialsForEntityRequest
}

/**
 *  生成 ListCredentialsForEntityResponse 数据
 *  message ListCredentialsForEntityResponse {
      repeated Credential credentials = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListCredentialsForEntityResponse (options) {
  // 构建 listCredentialsForEntityResponse
  const listCredentialsForEntityResponse = new ListCredentialsForEntityResponse()

  // 处理对应数据类型
  if ('credentials' in options) {
    const credentialsVal = options.credentials
    const credentialsList = []
    credentialsVal.forEach(item => {
      const credential = generateCredential(item)
      credentialsList.push(credential)
    })
    listCredentialsForEntityResponse.setCredentialsList(credentialsList)
  }

  return listCredentialsForEntityResponse
}

module.exports = {
  generateListCredentialsForEntityRequest,
  generateListCredentialsForEntityResponse
}
