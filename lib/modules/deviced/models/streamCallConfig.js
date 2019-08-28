/*
  message StreamCallConfig {
    string name = 1;
    string component = 2;
    string method = 3;
  }
*/
const {
  StreamCallConfig
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 StreamCallConfig 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 streamCallConfig
  const streamCallConfig = new StreamCallConfig()

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
      streamCallConfig[method](val)
    }
  })

  return streamCallConfig
}
