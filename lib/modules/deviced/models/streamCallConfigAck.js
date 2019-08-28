/*
  message StreamCallConfigAck {}
*/
const {
  StreamCallConfigAck
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 StreamCallConfigAck 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function () {
  // 构建 streamCallConfigAck
  const streamCallConfigAck = new StreamCallConfigAck()

  return streamCallConfigAck
}
