/*
  message OpOpStreamCallExit {}
*/
const {
  OpStreamCallExit
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 OpStreamCallExit 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function () {
  // 构建 opStreamCallExit
  const opStreamCallExit = new OpStreamCallExit()

  return opStreamCallExit
}
