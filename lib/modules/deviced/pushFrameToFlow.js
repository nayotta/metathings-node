const {
  StringValue,
  BoolValue
} = require('google-protobuf/google/protobuf/wrappers_pb')

const {
  PushFrameToFlowRequest,
  PushFrameToFlowResponse
} = require('../../proto/deviced/push_frame_to_flow_pb')

const {
  Config
} = PushFrameToFlowRequest
const {
  Ack
} = PushFrameToFlowResponse

const {
  generateOpDevice,
  generateOpFrame
} = require('./models')

/**
 *  生成 Config
 *  message Config {
      OpDevice device = 1;
      google.protobuf.BoolValue config_ack = 2;
      google.protobuf.BoolValue push_ack = 3;
    }
 *
 * @param {*} options
 * @returns
 */
function generateConfig (options) {
  const config = new Config()

  if ('device' in options) {
    const deviceVal = options.device
    // 处理对应数据类型
    const opDevice = generateOpDevice(deviceVal)
    config.setDevice(opDevice)
  }

  if ('config_ack' in options) {
    const configAckVal = options.config_ack
    // 处理对应数据类型
    const configAck = new BoolValue()
    configAck.setValue(configAckVal)
    config.setConfigAck(configAck)
  }

  if ('push_ack' in options) {
    const pushAckVal = options.push_ack
    // 处理对应数据类型
    const pushAck = new BoolValue()
    pushAck.setValue(pushAckVal)
    config.setPushAck(pushAck)
  }

  return config
}

/**
 *  生成 Ack
 *  message Ack {}
 *
 * @param {*} options
 * @returns
 */
function generateAck () {
  const ack = new Ack()

  return ack
}

/**
 *  生成 PushFrameToFlowRequest 数据
 *  message PushFrameToFlowRequest {
      message Config {
        OpDevice device = 1;
        google.protobuf.BoolValue config_ack = 2;
        google.protobuf.BoolValue push_ack = 3;
      }

      google.protobuf.StringValue id = 1 [(validator.field) = {msg_exists: true}];
      oneof request {
        Config config = 2;
        OpFrame frame = 3;
      }
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePushFrameToFlowRequest (options) {
  if (!('id' in options)) {
    throw new Error('id is required!')
  }
  // 构建 pushFrameToFlowRequest
  const pushFrameToFlowRequest = new PushFrameToFlowRequest()

  const idVal = options.id
  const id = new StringValue()
  id.setValue(idVal)
  pushFrameToFlowRequest.setId(id)

  if ('config' in options) {
    const configVal = options.config
    const config = generateConfig(configVal)
    pushFrameToFlowRequest.setConfig(config)
  }

  if ('frame' in options) {
    const frameVal = options.frame
    const opFrame = generateOpFrame(frameVal)
    pushFrameToFlowRequest.setFrame(opFrame)
  }

  return pushFrameToFlowRequest
}

/**
 *  生成 PushFrameToFlowResponse 数据
 *  message PushFrameToFlowResponse {
      message Ack {}

      string id = 1;
      oneof response {
        Ack ack = 2;
      }
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePushFrameToFlowResponse (options) {
  // 构建 pushFrameToFlowResponse
  const pushFrameToFlowResponse = new PushFrameToFlowResponse()

  if ('id' in options) {
    const idVal = options.id
    pushFrameToFlowResponse.setId(idVal)
  }

  // 处理对应数据类型
  if ('ack' in options) {
    const ackVal = options.ack
    const ack = generateAck(ackVal)
    pushFrameToFlowResponse.setAck(ack)
  }

  return pushFrameToFlowResponse
}

module.exports = {
  generatePushFrameToFlowRequest,
  generatePushFrameToFlowResponse
}
