/*
  message OpGroup {
    google.protobuf.StringValue id = 1;
    OpDomain domain = 2;
    repeated OpRole roles = 3;
    repeated OpEntity subjects = 4;
    repeated OpEntity objects = 5;
    google.protobuf.StringValue name = 6;
    google.protobuf.StringValue alias = 7;
    google.protobuf.StringValue description = 8;
    map<string, google.protobuf.StringValue> extra = 9;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  OpGroup
} = require('../../../proto/identityd2/model_pb')

const generateOpRole = require('./opRole')
const generateOpEntity = require('./opEntity')
const generateOpDomain = require('./opDomain')

/**
 * 生成 OpGroup 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opGroup
  const opGroup = new OpGroup()

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
      // 构建 google.protobuf.StringValue 数据
      const temp = new StringValue()
      temp.setValue(val)
      // 设置对应项
      opGroup[method](temp)
    }
  })

  // 处理 domain 字段，列表项为 OpDomain 类型
  if ('domain' in options) {
    const domain = options.domain
    opGroup.setDomain(generateOpDomain(domain))
  }

  // 处理 roles 字段，列表项为 OpRole 类型
  if ('roles' in options) {
    const list = options.roles
    const rolesList = []
    list.forEach(item => {
      rolesList.push(generateOpRole(item))
    })
    opGroup.setRolesList(rolesList)
  }

  // 处理 subjects 字段，列表项为 OpRole 类型
  if ('subjects' in options) {
    const list = options.subjects
    const subjectsList = []
    list.forEach(item => {
      subjectsList.push(generateOpEntity(item))
    })
    opGroup.setSubjectsList(subjectsList)
  }

  // 处理 objects 字段，列表项为 OpRole 类型
  if ('objects' in options) {
    const list = options.objects
    const objectsList = []
    list.forEach(item => {
      objectsList.push(generateOpEntity(item))
    })
    opGroup.setObjectsList(objectsList)
  }

  return opGroup
}
