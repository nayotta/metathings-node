const {
  DeleteEntityRequest
} = require('../../proto/identityd2/delete_entity_pb')

const {
  generateOpEntity
} = require('./models')

/**
 *  生成 DeleteEntityRequest 数据
 *  message DeleteEntityRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateDeleteEntityRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  // 构建 deleteEntityRequest
  const deleteEntityRequest = new DeleteEntityRequest()

  // 处理对应数据类型
  const entityVal = options.entity
  const opEntity = generateOpEntity(entityVal)
  deleteEntityRequest.setEntity(opEntity)

  return deleteEntityRequest
}

module.exports = {
  generateDeleteEntityRequest
}
