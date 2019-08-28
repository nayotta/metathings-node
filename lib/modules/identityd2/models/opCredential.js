/*
  message OpCredential {
    google.protobuf.StringValue id = 1;
    OpDomain domain = 2;
    repeated OpRole roles = 3;
    OpEntity entity = 4;
    google.protobuf.StringValue name = 5;
    google.protobuf.StringValue alias = 6;
    google.protobuf.StringValue secret = 7;
    google.protobuf.StringValue description = 8;
    google.protobuf.Timestamp expires_at = 9;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  OpCredential
} = require('../../../proto/identityd2/model_pb')
const generateOpDomain = require('./opDomain')
const generateOpRole = require('./opRole')
const generateOpEntity = require('./opEntity')

/**
 * 生成 Credential 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opCredential
  const opCredential = new OpCredential()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    alias: 'setAlias',
    secret: 'setSecret',
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
      opCredential[method](temp)
    }
  })

  // 处理 expires_at 字段，列表项为 Timestamp 类型
  if ('expires_at' in options) {
    const expiresAt = options.expires_at
    const timestamp = new Timestamp()
    timestamp.fromDate(expiresAt)
    opCredential.setExpiresAt(timestamp)
  }

  // 处理 domain 字段，列表项为 OpDomain 类型
  if ('domain' in options) {
    const domain = options.domain
    opCredential.setDomain(generateOpDomain(domain))
  }

  // 处理 roles 字段，列表项为 Role 类型
  if ('roles' in options) {
    const list = options.roles
    const rolesList = []
    list.forEach(item => {
      rolesList.push(generateOpRole(item))
    })
    opCredential.setRolesList(rolesList)
  }

  // 处理 entity 字段，列表项为 Entity 类型
  if ('entity' in options) {
    const entity = options.entity
    opCredential.setEntity(generateOpEntity(entity))
  }

  return opCredential
}
