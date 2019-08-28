const {
  Int32Value
} = require('google-protobuf/google/protobuf/wrappers_pb')

const {
  HeartbeatRequest
} = require('../../proto/deviced/heartbeat_pb')

const {
  generateOpDevice
} = require('./models')

/**
 *  生成 HeartbeatRequest 数据
 *  message HeartbeatRequest {
      OpDevice device = 1 [(validator.field) = {msg_exists: true}];
      google.protobuf.Int32Value startup_session = 2;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateHeartbeatRequest (options) {
  if (!('device' in options)) {
    throw new Error('device is required!')
  }

  // 构建 heartbeatRequest
  const heartbeatRequest = new HeartbeatRequest()

  // 处理对应数据类型
  const deviceVal = options.device
  const opDevice = generateOpDevice(deviceVal)
  heartbeatRequest.setDevice(opDevice)

  if ('startup_session' in options) {
    const startupSessionVal = options.startup_session
    const startupSession = new Int32Value()
    startupSession.setValue(startupSessionVal)
    heartbeatRequest.setStartupSession(startupSession)
  }

  return heartbeatRequest
}

module.exports = {
  generateHeartbeatRequest
}
