/*
  message OpToken {
    google.protobuf.StringValue id = 1;
    google.protobuf.Timestamp issued_at = 2;
    google.protobuf.Timestamp expires_at = 3;
    OpEntity entity = 4;
    repeated OpRole roles = 5;
    OpDomain domain = 6;
    OpCredential credential = 7;
    google.protobuf.StringValue text = 8;
    repeated OpGroup groups = 9;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  OpToken
} = require('../../../proto/identityd2/model_pb')
const generateOpDomain = require('./opDomain')
const generateOpEntity = require('./opEntity')
const generateOpCredential = require('./opCredential')
const generateOpRole = require('./opRole')
const generateOpGroup = require('./opGroup')

/**
 * 生成 OpToken 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opToken
  const opToken = new OpToken()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    text: 'setText'
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
      opToken[method](temp)
    }
  })

  // 处理 issued_at 字段，列表项为 Timestamp 类型
  if ('issued_at' in options) {
    const issuedAt = options.issued_at
    const timestamp = new Timestamp()
    timestamp.fromDate(issuedAt)
    opToken.setIssuedAt(timestamp)
  }

  // 处理 expires_at 字段，列表项为 Timestamp 类型
  if ('expires_at' in options) {
    const expiresAt = options.expires_at
    const timestamp = new Timestamp()
    timestamp.fromDate(expiresAt)
    opToken.setExpiresAt(timestamp)
  }

  // 处理 domain 字段，列表项为 OpDomain 类型
  if ('domain' in options) {
    const domain = options.domain
    opToken.setDomain(generateOpDomain(domain))
  }

  // 处理 entity 字段，列表项为 OpEntity 类型
  if ('entity' in options) {
    const entity = options.entity
    opToken.setEntity(generateOpEntity(entity))
  }

  // 处理 credential 字段，列表项为 OpCredential 类型
  if ('credential' in options) {
    const credential = options.credential
    opToken.setCredential(generateOpCredential(credential))
  }

  // 处理 roles 字段，列表项为 OpRole 类型
  if ('roles' in options) {
    const list = options.roles
    const opRolesList = []
    list.forEach(item => {
      opRolesList.push(generateOpRole(item))
    })
    opToken.setRolesList(opRolesList)
  }

  // 处理 groups 字段，列表项为 OpGroup 类型
  if ('groups' in options) {
    const list = options.groups
    const opGroupsList = []
    list.forEach(item => {
      opGroupsList.push(generateOpGroup(item))
    })
    opToken.setGroupsList(opGroupsList)
  }

  return opToken
}
