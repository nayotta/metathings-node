/*
  message UnaryCallValue {
    string name = 1;
    string component = 2;
    string method = 3;
    google.protobuf.Any value = 4;
  }
*/
const {
  Any
} = require('google-protobuf/google/protobuf/any_pb')

const {
  UnaryCallValue
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 UnaryCallValue 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 unaryCallValue
  const unaryCallValue = new UnaryCallValue()

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
      unaryCallValue[method](val)
    }
  })

  if ('value' in options) {
    const valueVal = options.value
    const value = new Any()
    value.setValue(valueVal)
    unaryCallValue.setValue(value)
  }

  return unaryCallValue
}
