const {
  ShowDeviceResponse
} = require('../../proto/deviced/show_device_pb')

const {
  generateDevice
} = require('./models')

/**
 *  生成 ShowDeviceResponse 数据
 *  message ShowDeviceResponse {
      Device device = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateShowDeviceResponse (options) {
  // 构建 showDeviceResponse
  const showDeviceResponse = new ShowDeviceResponse()

  // 处理对应数据类型
  if ('device' in options) {
    const deviceVal = options.device
    const device = generateDevice(deviceVal)
    showDeviceResponse.setDevice(device)
  }

  return showDeviceResponse
}

module.exports = {
  generateShowDeviceResponse
}
