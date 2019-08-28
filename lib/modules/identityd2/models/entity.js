/*
  message Entity {
    string id = 1;
    repeated Domain domains = 2;
    repeated Group groups = 3;
    repeated Role roles = 4;
    string name = 5;
    string alias = 6;
    string password = 7;
    map<string, string> extra = 8;
  }
*/
const {
  Entity
} = require('../../../proto/identityd2/model_pb')
const generateDomain = require('./domain')
const generateGroup = require('./group')
const generateRole = require('./role')

/**
 * 生成 Entity 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 entity
  const entity = new Entity()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    alias: 'setAlias',
    password: 'setPassword'
  }

  // 处理对应数据类型
  Object.keys(KEY_METHODS).forEach(key => {
    if (key in options) {
      const val = options[key]
      const method = KEY_METHODS[key]
      entity[method](val)
    }
  })

  // 处理 domains 字段，列表项为 Domain 类型
  if ('domains' in options) {
    const list = options.domains
    const domainsList = []
    list.forEach(item => {
      domainsList.push(generateDomain(item))
    })
    entity.setDomainsList(domainsList)
  }

  // 处理 groups 字段，列表项为 Group 类型
  if ('groups' in options) {
    const list = options.groups
    const groupsList = []
    list.forEach(item => {
      groupsList.push(generateGroup(item))
    })
    entity.setGroupsList(groupsList)
  }

  // 处理 roles 字段，列表项为 Group 类型
  if ('roles' in options) {
    const list = options.roles
    const rolesList = []
    list.forEach(item => {
      rolesList.push(generateRole(item))
    })
    entity.setRolesList(rolesList)
  }

  return entity
}
