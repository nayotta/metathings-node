/*
  message StreamCallValue {
    oneof union {
      google.protobuf.Any value = 1;
      StreamCallConfig config = 2;
      StreamCallConfigAck config_ack = 3;
      StreamCallExit exit = 4;
    }
  }
*/
const {
  Any
} = require('google-protobuf/google/protobuf/any_pb')
const {
  StreamCallValue
} = require('../../../proto/deviced/model_pb')

const generateStreamCallConfig = require('./streamCallConfig')
const generateStreamCallConfigAck = require('./streamCallConfigAck')
const generateStreamCallExit = require('./streamCallExit')

/**
 * 生成 StreamCallValue 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 streamCallValue
  const streamCallValue = new StreamCallValue()

  if ('value' in options) {
    const valueVal = options.value
    const value = new Any()
    value.setValue(valueVal)
    streamCallValue.setValue(value)
  }

  if ('config' in options) {
    const configVal = options.config
    const config = generateStreamCallConfig(configVal)
    streamCallValue.setConfig(config)
  }

  if ('config_ack' in options) {
    const configAckVal = options.config_ack
    const configAck = generateStreamCallConfigAck(configAckVal)
    streamCallValue.setConfigAck(configAck)
  }

  if ('exit' in options) {
    const exitVal = options.exit
    const exit = generateStreamCallExit(exitVal)
    streamCallValue.setExit(exit)
  }

  return streamCallValue
}
