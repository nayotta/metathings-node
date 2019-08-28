/*
  message OpEntity {
    google.protobuf.StringValue id = 1;
    repeated OpDomain domains = 2;
    repeated OpGroup groups = 3;
    repeated OpRole roles = 4;
    google.protobuf.StringValue name = 5;
    google.protobuf.StringValue alias = 6;
    google.protobuf.StringValue password = 7;
    map<string, google.protobuf.StringValue> extra = 8;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  OpEntity
} = require('../../../proto/identityd2/model_pb')
const generateOpDomain = require('./opDomain')
const generateOpGroup = require('./opGroup')
const generateOpRole = require('./opRole')

/**
 * 生成 OpEntity 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opEntity
  const opEntity = new OpEntity()

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
      // 构建 google.protobuf.StringValue 数据
      const temp = new StringValue()
      temp.setValue(val)
      // 设置对应项
      opEntity[method](temp)
    }
  })

  // 处理 domains 字段，列表项为 OpDomain 类型
  if ('domains' in options) {
    const list = options.domains
    const opDomainsList = []
    list.forEach(item => {
      opDomainsList.push(generateOpDomain(item))
    })
    opEntity.setDomainsList(opDomainsList)
  }

  // 处理 groups 字段，列表项为 OpGroup 类型
  if ('groups' in options) {
    const list = options.groups
    const opGroupsList = []
    list.forEach(item => {
      opGroupsList.push(generateOpGroup(item))
    })
    opEntity.setGroupsList(opGroupsList)
  }

  // 处理 roles 字段，列表项为 OpRole 类型
  if ('roles' in options) {
    const list = options.roles
    const opRoleList = []
    list.forEach(item => {
      opRoleList.push(generateOpRole(item))
    })
    opEntity.setRolesList(opRoleList)
  }

  return opEntity
}
