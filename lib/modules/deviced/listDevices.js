const {
  ListDevicesRequest,
  ListDevicesResponse
} = require('../../proto/deviced/list_devices_pb')

const {
  generateOpDevice,
  generateDevice
} = require('./models')

/**
 *  生成 ListDevicesRequest 数据
 *  message ListDevicesRequest {
      OpDevice device = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListDevicesRequest (options) {
  // 构建 listDevicesRequest
  const listDevicesRequest = new ListDevicesRequest()

  // 处理对应数据类型
  if ('device' in options) {
    const deviceVal = options.device
    const opDevice = generateOpDevice(deviceVal)
    listDevicesRequest.setDevice(opDevice)
  }

  return listDevicesRequest
}

/**
 *  生成 ListDevicesResponse 数据
 *  message ListDevicesResponse {
      repeated Device devices = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListDevicesResponse (options) {
  // 构建 listDevicesResponse
  const listDevicesResponse = new ListDevicesResponse()

  // 处理对应数据类型
  if ('devices' in options) {
    const devicesVal = options.devices
    const devicesList = []
    devicesVal.forEach(item => {
      const device = generateDevice(item)
      devicesList.push(device)
    })
    listDevicesResponse.setDevicesList(devicesList)
  }

  return listDevicesResponse
}

module.exports = {
  generateListDevicesRequest,
  generateListDevicesResponse
}
