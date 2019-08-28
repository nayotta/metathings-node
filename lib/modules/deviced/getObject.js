const {
  GetObjectRequest,
  GetObjectResponse
} = require('../../proto/deviced/get_object_pb')

const {
  generateOpObject,
  generateObject
} = require('./models')

/**
 *  生成 GetObjectRequest 数据
 *  message GetObjectRequest {
      OpObject object = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetObjectRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 getObjectRequest
  const getObjectRequest = new GetObjectRequest()

  const objectVal = options.object

  // 处理对应数据类型
  const opObject = generateOpObject(objectVal)
  getObjectRequest.setObject(opObject)

  return getObjectRequest
}

/**
 *  生成 GetObjectResponse 数据
 *  message GetObjectResponse {
      Object object = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetObjectResponse (options) {
  // 构建 getObjectResponse
  const getObjectResponse = new GetObjectResponse()

  // 处理对应数据类型
  if ('object' in options) {
    const objectVal = options.object
    const object = generateObject(objectVal)
    getObjectResponse.setObject(object)
  }

  return getObjectResponse
}

module.exports = {
  generateGetObjectRequest,
  generateGetObjectResponse
}
