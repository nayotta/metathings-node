/*
  message OpStreamCallValue {
    oneof union {
      google.protobuf.Any value = 1;
      OpStreamCallConfig config = 2;
      OpStreamCallConfigAck config_ack = 3;
      OpStreamCallExit exit = 4;
    }
  }
*/
const {
  Any
} = require('google-protobuf/google/protobuf/any_pb')
const {
  OpStreamCallValue
} = require('../../../proto/deviced/model_pb')

const generateOpStreamCallConfig = require('./opStreamCallConfig')
const generateOpStreamCallConfigAck = require('./opStreamCallConfigAck')
const generateOpStreamCallExit = require('./opStreamCallExit')

/**
 * 生成 OpStreamCallValue 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opStreamCallValue
  const opStreamCallValue = new OpStreamCallValue()

  if ('value' in options) {
    const valueVal = options.value
    const value = new Any()
    value.setValue(valueVal)
    opStreamCallValue.setValue(value)
  }

  if ('config' in options) {
    const configVal = options.config
    const config = generateOpStreamCallConfig(configVal)
    opStreamCallValue.setConfig(config)
  }

  if ('config_ack' in options) {
    const configAckVal = options.config_ack
    const configAck = generateOpStreamCallConfigAck(configAckVal)
    opStreamCallValue.setConfigAck(configAck)
  }

  if ('exit' in options) {
    const exitVal = options.exit
    const exit = generateOpStreamCallExit(exitVal)
    opStreamCallValue.setExit(exit)
  }

  return opStreamCallValue
}
