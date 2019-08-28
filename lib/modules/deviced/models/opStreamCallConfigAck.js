/*
  message OpStreamCallConfigAck {}
*/
const {
  OpStreamCallConfigAck
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 OpStreamCallConfigAck 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function () {
  // 构建 opStreamCallConfigAck
  const opStreamCallConfigAck = new OpStreamCallConfigAck()

  return opStreamCallConfigAck
}
