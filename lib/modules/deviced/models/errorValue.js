/*
  message ErrorValue {
    string name = 1;
    string component = 2;
    string method = 3;
    uint32 code = 4;
    string message = 5;
  }
*/
const {
  ErrorValue
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 ErrorValue 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 errorValue
  const errorValue = new ErrorValue()

  // 属性对应的方法
  const KEY_METHODS = {
    name: 'setName',
    component: 'setComponent',
    method: 'setMethod',
    message: 'setMessage'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      errorValue[method](val)
    }
  })

  if ('code' in options) {
    const codeVal = options.code
    errorValue.setCode(codeVal)
  }

  return errorValue
}
