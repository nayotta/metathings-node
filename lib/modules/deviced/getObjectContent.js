const {
  GetObjectContentRequest,
  GetObjectContentResponse
} = require('../../proto/deviced/get_object_content_pb')

const {
  generateOpObject
} = require('./models')

/**
 *  生成 GetObjectContentRequest 数据
 *  message GetObjectContentRequest {
      OpObject object = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetObjectContentRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 getObjectContentRequest
  const getObjectContentRequest = new GetObjectContentRequest()

  const objectVal = options.object

  // 处理对应数据类型
  const opObject = generateOpObject(objectVal)
  getObjectContentRequest.setObject(opObject)

  return getObjectContentRequest
}

/**
 *  生成 GetObjectContentResponse 数据
 *  message GetObjectContentResponse {
      bytes content = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetObjectContentResponse (options) {
  // 构建 getObjectContentResponse
  const getObjectContentResponse = new GetObjectContentResponse()

  // 处理对应数据类型
  if ('content' in options) {
    const contentVal = options.content
    getObjectContentResponse.setContent(contentVal)
  }

  return getObjectContentResponse
}

module.exports = {
  generateGetObjectContentRequest,
  generateGetObjectContentResponse
}
