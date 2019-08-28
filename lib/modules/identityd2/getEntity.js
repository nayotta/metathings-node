const {
  GetEntityRequest,
  GetEntityResponse
} = require('../../proto/identityd2/get_entity_pb')

const {
  generateEntity,
  generateOpEntity
} = require('./models')

/**
 *  生成 GetEntityRequest 数据
 *  message GetEntityRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetEntityRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  // 构建 getEntityRequest
  const getEntityRequest = new GetEntityRequest()

  // 处理对应数据类型
  const entityVal = options.entity
  const opEntity = generateOpEntity(entityVal)
  getEntityRequest.setEntity(opEntity)

  return getEntityRequest
}

/**
 *  生成 GetEntityResponse 数据
 *  message GetEntityResponse {
      Entity entity = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetEntityResponse (options) {
  // 构建 getEntityResponse
  const getEntityResponse = new GetEntityResponse()

  // 处理对应数据类型
  if ('entity' in options) {
    const entityVal = options.entity
    const entity = generateEntity(entityVal)
    getEntityResponse.setEntity(entity)
  }

  return getEntityResponse
}

module.exports = {
  generateGetEntityRequest,
  generateGetEntityResponse
}
