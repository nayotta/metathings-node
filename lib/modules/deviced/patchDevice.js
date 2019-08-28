const {
  PatchDeviceRequest,
  PatchDeviceResponse
} = require('../../proto/deviced/patch_device_pb')

const {
  generateOpDevice,
  generateDevice
} = require('./models')

/**
 *  生成 PatchDeviceRequest 数据
 *  message PatchDeviceRequest {
      OpDevice device = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchDeviceRequest (options) {
  if (!('device' in options)) {
    throw new Error('device is required!')
  }

  // 构建 patchDeviceRequest
  const patchDeviceRequest = new PatchDeviceRequest()

  // 处理对应数据类型
  const deviceVal = options.device
  const opDevice = generateOpDevice(deviceVal)
  patchDeviceRequest.setDevice(opDevice)

  return patchDeviceRequest
}

/**
 *  生成 PatchDeviceResponse 数据
 *  message PatchDeviceResponse {
      Device device = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchDeviceResponse (options) {
  // 构建 patchDeviceResponse
  const patchDeviceResponse = new PatchDeviceResponse()

  // 处理对应数据类型
  if ('device' in options) {
    const deviceVal = options.device
    const device = generateDevice(deviceVal)
    patchDeviceResponse.setDevice(device)
  }

  return patchDeviceResponse
}

module.exports = {
  generatePatchDeviceRequest,
  generatePatchDeviceResponse
}
