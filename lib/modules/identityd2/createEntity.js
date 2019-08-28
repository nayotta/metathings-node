const {
  CreateEntityRequest,
  CreateEntityResponse
} = require('../../proto/identityd2/create_entity_pb')

const {
  generateEntity,
  generateOpEntity
} = require('./models')

/**
 *  生成 CreateEntityRequest 数据
 *  message CreateEntityRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateEntityRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  // 构建 createEntityRequest
  const createEntityRequest = new CreateEntityRequest()

  // 处理对应数据类型
  const entityVal = options.entity
  const opEntity = generateOpEntity(entityVal)
  createEntityRequest.setEntity(opEntity)

  return createEntityRequest
}

/**
 *  生成 CreateEntityResponse 数据
 *  message CreateEntityResponse {
      Entity entity = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateEntityResponse (options) {
  // 构建 createEntityResponse
  const createEntityResponse = new CreateEntityResponse()

  // 处理对应数据类型
  if ('entity' in options) {
    const entityVal = options.entity
    const entity = generateEntity(entityVal)
    createEntityResponse.setEntity(entity)
  }

  return createEntityResponse
}

module.exports = {
  generateCreateEntityRequest,
  generateCreateEntityResponse
}
