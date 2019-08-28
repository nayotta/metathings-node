/*
  message OpState {
    google.protobuf.BoolValue data = 1;  // true:打开 false:关闭
  }
*/
const {
  BoolValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  OpState
} = require('../../../proto/airswitch/airswitch_pb')

/**
 * 生成 Module 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opState
  const opState = new OpState()

  if ('data' in options) {
    const dataVal = options.data
    const data = new BoolValue()
    data.setValue(dataVal)
    opState.setData(data)
  }

  return opState
}
