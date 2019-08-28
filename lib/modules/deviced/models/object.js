/*
  message Object {
    Device device = 1;
    string prefix = 2;
    string name = 3;
    int64 length = 4;
    string etag = 5;
    google.protobuf.Timestamp last_modified = 6;
  }
*/
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  Object: Objectt
} = require('../../../proto/deviced/model_pb')

const generateDevice = require('./device')

/**
 * 生成 Object 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 object
  const object = new Objectt()

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
      object[method](val)
    }
  })

  if ('length' in options) {
    const lengthVal = options.length
    object.setLength(lengthVal)
  }

  if ('last_modified' in options) {
    const lastModifiedVal = options.last_modified
    const lastModified = new Timestamp()
    lastModified.fromDate(lastModifiedVal)
    object.setLastModified(lastModified)
  }

  if ('device' in options) {
    const deviceVal = options.device
    const device = generateDevice(deviceVal)
    object.setDevice(device)
  }

  return object
}
