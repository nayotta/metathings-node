/*
  message OpFrame {
    google.protobuf.Timestamp ts = 1;
    google.protobuf.Struct data = 2;
  }
*/
const {
  Struct
} = require('google-protobuf/google/protobuf/struct_pb')
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  OpFrame
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 Frame 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opFrame
  const opFrame = new OpFrame()

  if ('ts' in options) {
    const tsVal = options.ts
    const ts = new Timestamp()
    ts.fromDate(tsVal)
    opFrame.setTs(ts)
  }

  if ('data' in options) {
    const dataVal = options.data
    const data = Struct.fromJavaScript(dataVal)
    opFrame.setData(data)
  }

  return opFrame
}
