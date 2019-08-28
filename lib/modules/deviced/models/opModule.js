/*
  message OpModule {
    google.protobuf.StringValue id = 1;
    ai.metathings.constant.state.ModuleState state = 2;
    google.protobuf.StringValue device_id = 3;
    google.protobuf.StringValue endpoint = 4;
    google.protobuf.StringValue component = 5;
    google.protobuf.StringValue name = 6;
    google.protobuf.StringValue alias = 7;
    google.protobuf.Timestamp heartbeat_at = 8;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  OpModule
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 Module 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opModule
  const opModule = new OpModule()

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
      // 构建 google.protobuf.StringValue 数据
      const temp = new StringValue()
      temp.setValue(val)

      opModule[method](temp)
    }
  })

  if ('state' in options) {
    const stateVal = options.state
    opModule.setState(stateVal)
  }

  if ('heartbeat_at' in options) {
    const heartbeatAtVal = options.heartbeat_at
    const timestamp = new Timestamp()
    timestamp.fromDate(heartbeatAtVal)
    opModule.setHeartbeatAt(timestamp)
  }

  return opModule
}
