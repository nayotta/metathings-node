const {
  StreamCallRequest,
  StreamCallResponse
} = require('../../proto/deviced/get_device_pb')

const {
  generateOpDevice,
  generateOpStreamCallValue,
  generateDevice,
  generateStreamCallValue
} = require('./models')

/**
 *  生成 StreamCallRequest 数据
 *  message StreamCallRequest {
      OpDevice device = 1 [(validator.field) = {msg_exists: true}];
      OpStreamCallValue value = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateStreamCallRequest (options) {
  if (!('device' in options)) {
    throw new Error('device is required!')
  }

  if (!('value' in options)) {
    throw new Error('value is required!')
  }

  // 构建 StreamCallRequest
  const streamCallRequest = new StreamCallRequest()

  const {
    device: deviceVal,
    value: valueVal
  } = options

  // 处理对应数据类型
  const opDevice = generateOpDevice(deviceVal)
  streamCallRequest.setDevice(opDevice)

  const opStreamCallValue = generateOpStreamCallValue(valueVal)
  streamCallRequest.setValue(opStreamCallValue)

  return streamCallRequest
}

/**
 *  生成 StreamCallResponse 数据
 *  message StreamCallResponse {
      Device device = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateStreamCallResponse (options) {
  // 构建 StreamCallResponse
  const streamCallResponse = new StreamCallResponse()

  // 处理对应数据类型
  if ('device' in options) {
    const deviceVal = options.device
    const device = generateDevice(deviceVal)
    streamCallResponse.setDevice(device)
  }

  if ('value' in options) {
    const valueVal = options.value
    const value = generateStreamCallValue(valueVal)
    streamCallResponse.setValue(value)
  }

  return streamCallResponse
}

module.exports = {
  generateStreamCallRequest,
  generateStreamCallResponse
}
