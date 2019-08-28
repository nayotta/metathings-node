const {
  DeleteDeviceRequest
} = require('../../proto/deviced/delete_device_pb')

const {
  generateOpDevice
} = require('./models')

/**
 *  生成 DeleteDeviceRequest 数据
 *  message CreateDeviceRequest {
      OpDevice device = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateDeleteDeviceRequest (options) {
  if (!('device' in options)) {
    throw new Error('device is required!')
  }

  // 构建 deleteDeviceRequest
  const deleteDeviceRequest = new DeleteDeviceRequest()

  // 处理对应数据类型
  const deviceVal = options.device
  const opDevice = generateOpDevice(deviceVal)
  deleteDeviceRequest.setDevice(opDevice)

  return deleteDeviceRequest
}

module.exports = {
  generateDeleteDeviceRequest
}
