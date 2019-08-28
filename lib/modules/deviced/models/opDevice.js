/*
  message OpDevice {
    google.protobuf.StringValue id = 1;
    ai.metathings.constant.kind.DeviceKind kind = 2;
    ai.metathings.constant.state.DeviceState state = 3;
    google.protobuf.StringValue name = 4;
    google.protobuf.StringValue alias = 5;
    repeated OpModule modules = 6;
    google.protobuf.Timestamp heartbeat_at = 7;
    repeated OpFlow flows = 8;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  OpDevice
} = require('../../../proto/deviced/model_pb')

const generateOpModule = require('./opModule')
const generateOpFlow = require('./opFlow')

/**
 * 生成 Device 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opDevice
  const opDevice = new OpDevice()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    alias: 'setAlias'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      // 构建 google.protobuf.StringValue 数据
      const temp = new StringValue()
      temp.setValue(val)
      opDevice[method](temp)
    }
  })

  if ('kind' in options) {
    const kindVal = options.kind
    opDevice.setKind(kindVal)
  }

  if ('state' in options) {
    const stateVal = options.state
    opDevice.setState(stateVal)
  }

  if ('heartbeat_at' in options) {
    const heartbeatAtVal = options.heartbeat_at
    const heartbeatAt = new Timestamp()
    heartbeatAt.fromDate(heartbeatAtVal)
    opDevice.setHeartbeatAt(heartbeatAt)
  }

  if ('modules' in options) {
    const modulesVal = options.modules
    const modulesList = []
    modulesVal.forEach(item => {
      const opModule = generateOpModule(item)
      modulesList.push(opModule)
    })
    opDevice.setModulesList(modulesList)
  }

  if ('flows' in options) {
    const flowsVal = options.flows
    const flowsList = []
    flowsVal.forEach(item => {
      const opFlow = generateOpFlow(item)
      flowsList.push(opFlow)
    })
    opDevice.setFlowsList(flowsList)
  }

  return opDevice
}
