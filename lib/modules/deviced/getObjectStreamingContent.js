const {
  GetObjectStreamingContentRequest,
  GetObjectStreamingContentResponse
} = require('../../proto/deviced/get_object_streaming_content_pb')

const {
  generateOpObject
} = require('./models')

/**
 *  生成 GetObjectStreamingContentRequest 数据
 *  message GetObjectStreamingContentRequest {
      OpObject object = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetObjectStreamingContentRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 getObjectStreamingContentRequest
  const getObjectStreamingContentRequest = new GetObjectStreamingContentRequest()

  const objectVal = options.object

  // 处理对应数据类型
  const opObject = generateOpObject(objectVal)
  getObjectStreamingContentRequest.setObject(opObject)

  return getObjectStreamingContentRequest
}

/**
 *  生成 GetObjectStreamingContentResponse 数据
 *  message GetObjectStreamingContentResponse {
      bytes content = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetObjectStreamingContentResponse (options) {
  // 构建 getObjectStreamingContentResponse
  const getObjectStreamingContentResponse = new GetObjectStreamingContentResponse()

  // 处理对应数据类型
  if ('content' in options) {
    const contentVal = options.content
    getObjectStreamingContentResponse.setContent(contentVal)
  }

  return getObjectStreamingContentResponse
}

module.exports = {
  generateGetObjectStreamingContentRequest,
  generateGetObjectStreamingContentResponse
}
