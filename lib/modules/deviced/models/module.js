/*
  message Module {
    string id = 1;
    ai.metathings.constant.state.ModuleState state = 2;
    string device_id = 3;
    string endpoint = 4;
    string component = 5;
    string name = 6;
    string alias = 7;
    google.protobuf.Timestamp heartbeat_at = 8;
  }
*/
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  Module
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 Module 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 module
  const module = new Module()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    alias: 'setAlias',
    deviceId: 'setDeviceId',
    endpoint: 'setEndpoint',
    component: 'setComponent'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      module[method](val)
    }
  })

  if ('state' in options) {
    const stateVal = options.state
    module.setState(stateVal)
  }

  if ('heartbeat_at' in options) {
    const heartbeatAtVal = options.heartbeat_at
    const timestamp = new Timestamp()
    timestamp.fromDate(heartbeatAtVal)
    module.setHeartbeatAt(timestamp)
  }

  return Module
}
