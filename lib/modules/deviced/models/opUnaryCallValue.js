/*
  message OpUnaryCallValue {
    google.protobuf.StringValue name = 1;
    google.protobuf.StringValue component = 2;
    google.protobuf.StringValue method = 3;
    google.protobuf.Any value = 4;
  }
*/
const {
  Any
} = require('google-protobuf/google/protobuf/any_pb')
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb')

const {
  OpUnaryCallValue
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 OpUnaryCallValue 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opUnaryCallValue
  const opUnaryCallValue = new OpUnaryCallValue()

  // 属性对应的方法
  const KEY_METHODS = {
    name: 'setName',
    component: 'setComponent',
    method: 'setMethod'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      // 构建 google.protobuf.StringValue 数据
      const temp = new StringValue()
      temp.setValue(val)
      opUnaryCallValue[method](temp)
    }
  })

  if ('value' in options) {
    const valueVal = options.value
    const value = new Any()
    value.setTypeUrl(valueVal.type)
    value.setValue(valueVal.value)
    opUnaryCallValue.setValue(value)
  }

  return opUnaryCallValue
}
