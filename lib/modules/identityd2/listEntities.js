const {
  ListEntitiesRequest,
  ListEntitiesResponse
} = require('../../proto/identityd2/list_entities_pb')

const {
  generateOpEntity,
  generateEntity
} = require('./models')

/**
 *  生成 ListEntitiesRequest 数据
 *  message ListEntitiesRequest {
      OpEntity entity = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListEntitiesRequest (options) {
  // 构建 listEntitiesRequest
  const listEntitiesRequest = new ListEntitiesRequest()

  // 处理对应数据类型
  if ('entity' in options) {
    const entityVal = options.entity
    const opEntity = generateOpEntity(entityVal)
    listEntitiesRequest.setEntity(opEntity)
  }

  return listEntitiesRequest
}

/**
 *  生成 ListEntitiesResponse 数据
 *  message ListEntitiesResponse {
      repeated Entity entities = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListEntitiesResponse (options) {
  // 构建 listEntitiesResponse
  const listEntitiesResponse = new ListEntitiesResponse()

  // 处理对应数据类型
  if ('entities' in options) {
    const entitiesVal = options.entities
    const entitiesList = []
    entitiesVal.forEach(item => {
      const entity = generateEntity(item)
      entitiesList.push(entity)
    })
    listEntitiesResponse.setEntitiesList(entitiesList)
  }

  return listEntitiesResponse
}

module.exports = {
  generateListEntitiesRequest,
  generateListEntitiesResponse
}
