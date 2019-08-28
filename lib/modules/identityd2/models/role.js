/*
  message Role {
    string id = 1;
    string name = 2;
    string alias = 3;
    string description = 4;
    repeated Action actions = 5;
    map<string, string> extra = 6;
  }
*/
const {
  Role
} = require('../../../proto/identityd2/model_pb')
const generateAction = require('./action')

/**
 * 生成 Role 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 role
  const role = new Role()

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
      role[method](val)
    }
  })

  // 处理 actions 字段，列表项为 Action 类型
  if ('actions' in options) {
    const list = options.actions
    const actionsList = []
    list.forEach(item => {
      actionsList.push(generateAction(item))
    })
    role.setActionsList(actionsList)
  }

  return role
}
