/*
  message Action {
    string id = 1;
    string name = 2;
    string alias = 3;
    string description = 4;
    map<string, string> extra = 5;
  }
*/
const {
  Action
} = require('../../../proto/identityd2/model_pb')

/**
 * 生成 Action 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 Action
  const action = new Action()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    alias: 'setAlias',
    description: 'setDescription'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      action[method](val)
    }
  })

  return action
}
