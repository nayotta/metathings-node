const {
  RemoveObjectRequest
} = require('../../proto/deviced/remove_object_pb')

const {
  generateOpObject
} = require('./models')

/**
 *  生成 RemoveObjectRequest 数据
 *  message RemoveObjectRequest {
      OpObject object = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRemoveObjectRequest (options) {
  if (!('object' in options)) {
    throw new Error('object is required!')
  }

  // 构建 removeObjectRequest
  const removeObjectRequest = new RemoveObjectRequest()

  // 处理对应数据类型
  const objectVal = options.object
  const opObject = generateOpObject(objectVal)
  removeObjectRequest.setObject(opObject)

  return removeObjectRequest
}

module.exports = {
  generateRemoveObjectRequest
}
