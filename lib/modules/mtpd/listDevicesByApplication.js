const {
  ListDevicesByApplicationRequest,
  ListDevicesByApplicationResponse
} = require('../../proto/mtpd/service_pb')

const { generateDevice } = require('./models')

/**
 *  生成 ListDevicesByApplicationRequest 数据
 *  message ListDevicesByApplicationRequest {}
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListDevicesByApplicationRequest (options) {
  // 构建 listDevicesByApplicationRequest
  const listDevicesByApplicationRequest = new ListDevicesByApplicationRequest()

  if ('activated' in options) {
    const activatedValue = options.activated
    listDevicesByApplicationRequest.setActivated(activatedValue)
  }

  return listDevicesByApplicationRequest
}

/**
 *  生成 ListDevicesByApplicationRequest 数据
 *  message ListDevicesByApplicationRequest {}
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateListDevicesByApplicationResponse (options) {
  // 构建 listDevicesByApplicationResponse
  const listDevicesByApplicationResponse = new ListDevicesByApplicationResponse()

  if ('devices' in options) {
    const devicesVal = options.devices
    const devicesList = []
    devicesVal.forEach(item => {
      const temp = generateDevice(item)
      devicesList.push(temp)
    })
    listDevicesByApplicationResponse.setDevicesList(devicesList)
  }

  return listDevicesByApplicationResponse
}

module.exports = {
  generateListDevicesByApplicationRequest,
  generateListDevicesByApplicationResponse
}
