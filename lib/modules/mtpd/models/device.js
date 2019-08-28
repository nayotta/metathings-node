/*
  message Device {
    string id = 1;
    string inst_name = 2;
    string name = 3;
    string status = 4;
    string kind = 5;
    string template = 6;
  }
*/
const {
  Device
} = require('../../../proto/mtpd/service_pb')

/**
 * 生成 Device 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 device
  const device = new Device()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    inst_name: 'setInstName',
    status: 'setStatus',
    kind: 'setKind',
    template: 'setTemplate'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      device[method](val)
    }
  })

  return device
}
