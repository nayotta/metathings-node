/*
  message Frame {
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
  Frame
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 Frame 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 frame
  const frame = new Frame()

  if ('ts' in options) {
    const tsVal = options.ts
    const ts = new Timestamp()
    ts.fromDate(tsVal)
    frame.setTs(ts)
  }

  if ('data' in options) {
    const dataVal = options.data
    const data = Struct.fromJavaScript(dataVal)
    frame.setData(data)
  }

  return frame
}
