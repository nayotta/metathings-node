const {
  CreateDeviceRequest,
  CreateDeviceResponse
} = require('../../proto/deviced/create_device_pb')

const {
  generateOpDevice,
  generateDevice
} = require('./models')

/**
 *  生成 CreateDeviceRequest 数据
 *  message CreateDeviceRequest {
      OpDevice device = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateDeviceRequest (options) {
  if (!('device' in options)) {
    throw new Error('device is required!')
  }

  // 构建 createDeviceRequest
  const createDeviceRequest = new CreateDeviceRequest()

  // 处理对应数据类型
  const deviceVal = options.device
  const opDevice = generateOpDevice(deviceVal)
  createDeviceRequest.setDevice(opDevice)

  return createDeviceRequest
}

/**
 *  生成 CreateDeviceResponse 数据
 *  message CreatesResponse {
      repeated Device devices = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateCreateDeviceResponse (options) {
  // 构建 createDeviceResponse
  const createDeviceResponse = new CreateDeviceResponse()

  // 处理对应数据类型
  if ('device' in options) {
    const deviceVal = options.device
    const device = generateDevice(deviceVal)
    createDeviceResponse.setDevice(device)
  }

  return createDeviceResponse
}

module.exports = {
  generateCreateDeviceRequest,
  generateCreateDeviceResponse
}
