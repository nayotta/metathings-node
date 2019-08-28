const {
  RenameObjectRequest
} = require('../../proto/deviced/rename_object_pb')

const {
  generateOpObject
} = require('./models')

/**
 *  生成 RenameObjectRequest 数据
 *  message RenameObjectRequest {
      OpObject source = 1 [(validator.field) = {msg_exists: true}];
      OpObject destination = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateRenameObjectRequest (options) {
  if (!('source' in options)) {
    throw new Error('source is required!')
  }

  if (!('destination' in options)) {
    throw new Error('destination is required!')
  }

  // 构建 renameObjectRequest
  const renameObjectRequest = new RenameObjectRequest()

  const {
    source: sourceVal,
    destination: destinationVal
  } = options

  // 处理对应数据类型
  const source = generateOpObject(sourceVal)
  renameObjectRequest.setSource(source)

  const destination = generateOpObject(destinationVal)
  renameObjectRequest.setDestination(destination)

  return renameObjectRequest
}

module.exports = {
  generateRenameObjectRequest
}
