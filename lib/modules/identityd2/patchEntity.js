const {
  PatchEntityRequest,
  PatchEntityResponse
} = require('../../proto/identityd2/patch_entity_pb')

const {
  generateEntity,
  generateOpEntity
} = require('./models')

/**
 *  生成 PatchEntityRequest 数据
 *  message PatchEntityRequest {
      OpEntity entity = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchEntityRequest (options) {
  if (!('entity' in options)) {
    throw new Error('entity is required!')
  }

  // 构建 patchEntityRequest
  const patchEntityRequest = new PatchEntityRequest()

  // 处理对应数据类型
  const entityVal = options.entity
  const opEntity = generateOpEntity(entityVal)
  patchEntityRequest.setEntity(opEntity)

  return patchEntityRequest
}

/**
 *  生成 PatchEntityResponse 数据
 *  message PatchEntityResponse {
      Entity entity = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchEntityResponse (options) {
  // 构建 patchEntityResponse
  const patchEntityResponse = new PatchEntityResponse()

  // 处理对应数据类型
  if ('entity' in options) {
    const entityVal = options.entity
    const entity = generateEntity(entityVal)
    patchEntityResponse.setEntity(entity)
  }

  return patchEntityResponse
}

module.exports = {
  generatePatchEntityRequest,
  generatePatchEntityResponse
}
