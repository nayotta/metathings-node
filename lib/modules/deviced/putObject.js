const {
  BytesValue
} = require('google-protobuf/google/protobuf/wrappers_pb')
const {
  PutObjectRequest
} = require('../../proto/deviced/put_object_pb')

const {
  generateOpObject
} = require('./models')

/**
 *  生成 PutObjectRequest 数据
 *  message PutObjectRequest {
      OpObject object = 1 [(validator.field) = {msg_exists: true}];
      google.protobuf.BytesValue content = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePutObjectRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  if (!('content' in options)) {
    throw new Error('content is required!')
  }

  // 构建 putObjectRequest
  const putObjectRequest = new PutObjectRequest()

  // 处理对应数据类型
  const {
    object: objectVal,
    content: contentVal
  } = options

  const opObject = generateOpObject(objectVal)
  putObjectRequest.setObject(opObject)

  const content = new BytesValue()
  content.setValue(contentVal)
  putObjectRequest.setContent(content)

  return putObjectRequest
}

module.exports = {
  generatePutObjectRequest
}
