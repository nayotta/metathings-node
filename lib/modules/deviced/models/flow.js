/*
  message Flow {
    string id = 1;
    string device_id = 2;
    string name = 3;
    string alias = 4;
  }
*/
const {
  Flow
} = require('../../../proto/deviced/model_pb')

/**
 * 生成 Flow 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 flow
  const flow = new Flow()

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
      flow[method](val)
    }
  })

  return flow
}
