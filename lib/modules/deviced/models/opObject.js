/*
  message OpObject {
    OpDevice device = 1;
    google.protobuf.StringValue prefix = 2;
    google.protobuf.StringValue name = 3;
    google.protobuf.Int64Value length = 4;
    google.protobuf.StringValue etag = 5;
    google.protobuf.Timestamp last_modified = 6;
  }
*/
const {
  Int64Value,
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb')
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  OpObject
} = require('../../../proto/deviced/model_pb')

const generateOpDevice = require('./opDevice')

/**
 * 生成 OpObject 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opObject
  const opObject = new OpObject()

  // 属性对应的方法
  const KEY_METHODS = {
    prefix: 'setPrefix',
    name: 'setName',
    etag: 'setEtag'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      // 构建 google.protobuf.StringValue 数据
      const temp = new StringValue()
      temp.setValue(val)

      opObject[method](temp)
    }
  })

  if ('length' in options) {
    const lengthVal = options.length
    const length = new Int64Value()
    length.setValue(lengthVal)
    opObject.setLength(length)
  }

  if ('last_modified' in options) {
    const lastModifiedVal = options.last_modified
    const lastModified = new Timestamp()
    lastModified.fromDate(lastModifiedVal)
    opObject.setLastModified(lastModified)
  }

  if ('device' in options) {
    const deviceVal = options.device
    const opDevice = generateOpDevice(deviceVal)
    opObject.setDevice(opDevice)
  }

  return opObject
}
