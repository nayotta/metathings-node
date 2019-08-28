const {
  StringValue,
  BoolValue
} = require('google-protobuf/google/protobuf/wrappers_pb')

const {
  PullFrameFromFlowRequest,
  PullFrameFromFlowResponse
} = require('../../proto/deviced/pull_frame_from_flow_pb')

const {
  Config
} = PullFrameFromFlowRequest
const {
  Ack,
  Pack
} = PullFrameFromFlowResponse

const {
  generateOpDevice,
  generateFlow,
  generateFrame
} = require('./models')

/**
 *  生成 Config
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

  return config
}

/**
 *  生成 Ack
 *
 * @param {*} options
 * @returns
 */
function generateAck () {
  const ack = new Ack()

  return ack
}
/**
 *  生成 Pack
 *
 * @param {*} options
 * @returns
 */
function generatePack (options) {
  const pack = new Pack()

  if ('flow' in options) {
    const flowVal = options.flow
    // 处理对应数据类型
    const flow = generateFlow(flowVal)
    pack.setFlow(flow)
  }

  if ('frames' in options) {
    const framesVal = options.frames
    const framesList = []
    framesVal.forEach(item => {
      const frame = generateFrame(item)
      framesList.push(frame)
    })
    // 处理对应数据类型
    pack.setFramesList(framesList)
  }

  return pack
}

/**
 *  生成 PullFrameFromFlowRequest 数据
 *  message PullFrameFromFlowRequest {
      message Config {
        OpDevice device = 1;
        google.protobuf.BoolValue config_ack = 2;
      }

      google.protobuf.StringValue id = 1 [(validator.field) = {msg_exists: true}];
      oneof request {
        Config config = 2;
      }
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePullFrameFromFlowRequest (options) {
  if (!('id' in options)) {
    throw new Error('id is required!')
  }
  // 构建 pullFrameFromFlowRequest
  const pullFrameFromFlowRequest = new PullFrameFromFlowRequest()

  const idVal = options.id
  const id = new StringValue()
  id.setValue(idVal)
  pullFrameFromFlowRequest.setId(id)

  if ('config' in options) {
    const configVal = options.config
    const config = generateConfig(configVal)
    pullFrameFromFlowRequest.setConfig(config)
  }

  return pullFrameFromFlowRequest
}

/**
 *  生成 PullFrameFromFlowResponse 数据
 *  message PullFrameFromFlowResponse {
      message Ack {}
      message Pack {
        Flow flow = 1;
        repeated Frame frames = 2;
      }

      string id = 1;
      oneof response {
        Ack ack = 2;
        Pack pack = 3;
      }
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePullFrameFromFlowResponse (options) {
  // 构建 pullFrameFromFlowResponse
  const pullFrameFromFlowResponse = new PullFrameFromFlowResponse()

  if ('id' in options) {
    const idVal = options.id
    pullFrameFromFlowResponse.setId(idVal)
  }

  // 处理对应数据类型
  if ('ack' in options) {
    const ackVal = options.ack
    const ack = generateAck(ackVal)
    pullFrameFromFlowResponse.setAck(ack)
  }

  if ('pack' in options) {
    const packVal = options.pack
    const pack = generatePack(packVal)
    pullFrameFromFlowResponse.setPack(pack)
  }

  return pullFrameFromFlowResponse
}

module.exports = {
  generatePullFrameFromFlowRequest,
  generatePullFrameFromFlowResponse
}
