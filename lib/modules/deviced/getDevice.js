const {
  GetDeviceRequest,
  GetDeviceResponse
} = require('../../proto/deviced/get_device_pb')

const {
  generateOpDevice,
  generateDevice
} = require('./models')

/**
 *  生成 GetDeviceRequest 数据
 *  message GetDeviceRequest {
      OpDevice device = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetDeviceRequest (options) {
  if (!('device' in options)) {
    throw new Error('device is required!')
  }

  // 构建 getDeviceRequest
  const getDeviceRequest = new GetDeviceRequest()

  const {
    device: deviceVal
  } = options

  // 处理对应数据类型
  const opDevice = generateOpDevice(deviceVal)
  getDeviceRequest.setDevice(opDevice)

  return getDeviceRequest
}

/**
 *  生成 GetDeviceResponse 数据
 *  message GetDeviceResponse {
      Device device = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateGetDeviceResponse (options) {
  // 构建 getDeviceResponse
  const getDeviceResponse = new GetDeviceResponse()

  // 处理对应数据类型
  if ('device' in options) {
    const deviceVal = options.device
    const device = generateDevice(deviceVal)
    getDeviceResponse.setDevice(device)
  }

  return getDeviceResponse
}

module.exports = {
  generateGetDeviceRequest,
  generateGetDeviceResponse
}
