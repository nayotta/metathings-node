/*
  message StreamCallExit {}
*/
const {
  StreamCallExit
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 StreamCallExit 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function () {
  // 构建 streamCallExit
  const streamCallExit = new StreamCallExit()

  return streamCallExit
}
