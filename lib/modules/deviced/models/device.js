/*
  message Device {
    string id = 1;
    ai.metathings.constant.kind.DeviceKind kind = 2;
    ai.metathings.constant.state.DeviceState state = 3;
    string name = 4;
    string alias = 5;
    repeated Module modules = 6;
    google.protobuf.Timestamp heartbeat_at = 7;
    repeated Flow flows = 8;
  }
*/
const {
  Device
} = require('../../../proto/deviced/model_pb')

const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const generateModule = require('./module')
const generateFlow = require('./flow')

/**
 * 生成 Device 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 device
  const device = new Device()

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
      device[method](val)
    }
  })

  if ('kind' in options) {
    const kindVal = options.kind
    device.setKind(kindVal)
  }

  if ('state' in options) {
    const stateVal = options.state
    device.setState(stateVal)
  }

  if ('heartbeat_at' in options) {
    const heartbeatAtVal = options.heartbeat_at
    const heartbeatAt = new Timestamp()
    heartbeatAt.fromDate(heartbeatAtVal)
    device.setHeartbeatAt(heartbeatAt)
  }

  if ('modules' in options) {
    const modulesVal = options.modules
    const modulesList = []
    modulesVal.forEach(item => {
      const module = generateModule(item)
      modulesList.push(module)
    })
    device.setModulesList(modulesList)
  }

  if ('flows' in options) {
    const flowsVal = options.flows
    const flowsList = []
    flowsVal.forEach(item => {
      const module = generateFlow(item)
      flowsList.push(module)
    })
    device.setFlowsList(flowsList)
  }

  return device
}
