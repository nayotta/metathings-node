const {
  ListObjectsRequest,
  ListObjectsResponse
} = require('../../proto/deviced/list_objects_pb')

const {
  generateOpObject,
  generateObject
} = require('./models')

/**
 *  生成 ListObjectsRequest 数据
 *  message ListObjectsRequest {
      OpObject object = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListObjectsRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 listObjectsRequest
  const listObjectsRequest = new ListObjectsRequest()

  // 处理对应数据类型
  const objectVal = options.object
  const opObject = generateOpObject(objectVal)
  listObjectsRequest.setObject(opObject)

  return listObjectsRequest
}

/**
 *  生成 ListObjectsResponse 数据
 *  message ListObjectsResponse {
      repeated Object objects = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListObjectsResponse (options) {
  // 构建 listObjectsResponse
  const listObjectsResponse = new ListObjectsResponse()

  // 处理对应数据类型
  if ('objects' in options) {
    const objectsVal = options.objects
    const objectsList = []
    objectsVal.forEach(item => {
      const object = generateObject(item)
      objectsList.push(object)
    })
    listObjectsResponse.setObjectsList(objectsList)
  }

  return listObjectsResponse
}

module.exports = {
  generateListObjectsRequest,
  generateListObjectsResponse
}
