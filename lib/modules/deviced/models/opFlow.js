/*
  message OpFlow {
    google.protobuf.StringValue id = 1;
    google.protobuf.StringValue device_id = 2;
    google.protobuf.StringValue name = 3;
    google.protobuf.StringValue alias = 4;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  OpFlow
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 OpFlow 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opFlow
  const opFlow = new OpFlow()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    alias: 'setAlias',
    deviceId: 'setDeviceId'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      // 构建 google.protobuf.StringValue 数据
      const temp = new StringValue()
      temp.setValue(val)

      opFlow[method](temp)
    }
  })

  return opFlow
}
