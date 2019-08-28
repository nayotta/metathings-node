const {
  ShowEntityResponse
} = require('../../proto/identityd2/create_entity_pb')

const {
  generateEntity
} = require('./models')

/**
 *  生成 ShowEntityResponse 数据
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateShowEntityResponse (options) {
  // 构建 showEntityResponse
  const showEntityResponse = new ShowEntityResponse()

  // 处理对应数据类型
  if ('entity' in options) {
    const entity = generateEntity(options.entity)
    showEntityResponse.setEntity(entity)
  }

  return showEntityResponse
}

module.exports = {
  generateShowEntityResponse
}
