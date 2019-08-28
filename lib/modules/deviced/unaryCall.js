const {
  UnaryCallRequest,
  UnaryCallResponse
} = require('../../proto/deviced/unary_call_pb')

const {
  generateOpDevice,
  generateOpUnaryCallValue,
  generateDevice,
  generateUnaryCallValue
} = require('./models')

/**
 *  生成 UnaryCallRequest 数据
 *  message UnaryCallRequest {
      OpDevice device = 1 [(validator.field) = {msg_exists: true}];
      OpUnaryCallValue value = 2 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateUnaryCallRequest (options) {
  if (!('device' in options)) {
    throw new Error('device is required!')
  }

  if (!('value' in options)) {
    throw new Error('value is required!')
  }

  // 构建 UnaryCallRequest
  const unaryCallRequest = new UnaryCallRequest()

  const {
    device: deviceVal,
    value: valueVal
  } = options

  // 处理对应数据类型
  const opDevice = generateOpDevice(deviceVal)
  unaryCallRequest.setDevice(opDevice)

  const opUnaryCallValue = generateOpUnaryCallValue(valueVal)
  unaryCallRequest.setValue(opUnaryCallValue)

  return unaryCallRequest
}

/**
 *  生成 UnaryCallResponse 数据
 *  message UnaryCallResponse {
      Device device = 1;
      UnaryCallValue value = 2;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateUnaryCallResponse (options) {
  // 构建 unaryCallResponse
  const unaryCallResponse = new UnaryCallResponse()

  // 处理对应数据类型
  if ('device' in options) {
    const deviceVal = options.device
    const device = generateDevice(deviceVal)
    unaryCallResponse.setDevice(device)
  }

  if ('value' in options) {
    const valueVal = options.value
    const unaryCallValue = generateUnaryCallValue(valueVal)
    unaryCallResponse.setValue(unaryCallValue)
  }

  return unaryCallResponse
}

module.exports = {
  generateUnaryCallRequest,
  generateUnaryCallResponse
}
