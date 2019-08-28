/*
  message Group {
    string id = 1;
    Domain domain = 2;
    repeated Role roles = 3;
    repeated Entity subjects = 4;
    repeated Entity objects = 5;
    string name = 6;
    string alias = 7;
    string description = 8;
    map<string, string> extra = 9;
  }
*/
const {
  Group
} = require('../../../proto/identityd2/model_pb')

const generateRole = require('./role')
const generateEntity = require('./entity')
const generateDomain = require('./domain')

/**
 * 生成 Group 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 Group
  const group = new Group()

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
      group[method](val)
    }
  })

  // 处理 domain 字段，列表项为 OpDomain 类型
  if ('domain' in options) {
    const domain = options.domain
    group.setDomain(generateDomain(domain))
  }

  // 处理 roles 字段，列表项为 Role 类型
  if ('roles' in options) {
    const list = options.roles
    const rolesList = []
    list.forEach(item => {
      rolesList.push(generateRole(item))
    })
    group.setRolesList(rolesList)
  }

  // 处理 subjects 字段，列表项为 Role 类型
  if ('subjects' in options) {
    const list = options.subjects
    const subjectsList = []
    list.forEach(item => {
      subjectsList.push(generateEntity(item))
    })
    group.setSubjectsList(subjectsList)
  }

  // 处理 objects 字段，列表项为 Role 类型
  if ('objects' in options) {
    const list = options.objects
    const objectsList = []
    list.forEach(item => {
      objectsList.push(generateEntity(item))
    })
    group.setObjectsList(objectsList)
  }

  return Group
}
