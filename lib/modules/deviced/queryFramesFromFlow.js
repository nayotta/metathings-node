const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  QueryFramesFromFlowRequest,
  QueryFramesFromFlowResponse
} = require('../../proto/deviced/query_frames_from_flow_pb')

const {
  Pack
} = QueryFramesFromFlowResponse

const {
  generateOpDevice,
  generateFlow,
  generateFrame
} = require('./models')

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
 *  生成 QueryFramesFromFlowRequest 数据
 *  message QueryFramesFromFlowRequest {
      OpDevice device = 1;
      google.protobuf.Timestamp from = 2;
      google.protobuf.Timestamp to = 3;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateQueryFramesFromFlowRequest (options) {
  // 构建 queryFramesFromFlowRequest
  const queryFramesFromFlowRequest = new QueryFramesFromFlowRequest()

  if ('device' in options) {
    const deviceVal = options.device
    const device = generateOpDevice(deviceVal)
    queryFramesFromFlowRequest.setDevice(device)
  }

  if ('from' in options) {
    const fromVal = options.from
    const from = new Timestamp()
    from.fromDate(fromVal)
    queryFramesFromFlowRequest.setFrom(from)
  }

  if ('to' in options) {
    const toVal = options.to
    const to = new Timestamp()
    to.fromDate(toVal)
    queryFramesFromFlowRequest.setTo(to)
  }

  return queryFramesFromFlowRequest
}

/**
 *  生成 QueryFramesFromFlowResponse 数据
 *  message QueryFramesFromFlowResponse {
      message Pack {
        Flow flow = 1;
        repeated Frame frames = 2;
      }
      repeated Pack packs = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateQueryFramesFromFlowResponse (options) {
  // 构建 queryFramesFromFlowResponse
  const queryFramesFromFlowResponse = new QueryFramesFromFlowResponse()

  // 处理对应数据类型
  if ('packs' in options) {
    const packsVal = options.packs
    const packsList = []
    packsVal.forEach(item => {
      const pack = generatePack(item)
      packsList.push(pack)
    })
    queryFramesFromFlowResponse.setPack(packsList)
  }

  return queryFramesFromFlowResponse
}

module.exports = {
  generateQueryFramesFromFlowRequest,
  generateQueryFramesFromFlowResponse
}
