/*
  message Token {
    string id = 1;
    google.protobuf.Timestamp issued_at = 2;
    google.protobuf.Timestamp expires_at = 3;
    Entity entity = 4;
    repeated Role roles = 5;
    Domain domain = 6;
    Credential credential = 7;
    string text = 8;
    repeated Group groups = 9;
  }
*/
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  Token
} = require('../../../proto/identityd2/model_pb')
const generateDomain = require('./domain')
const generateEntity = require('./entity')
const generateCredential = require('./credential')
const generateRole = require('./role')
const generateGroup = require('./group')

/**
 * 生成 Token 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 token
  const token = new Token()

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
      token[method](val)
    }
  })

  // 处理 issued_at 字段，列表项为 Timestamp 类型
  if ('issued_at' in options) {
    const issuedAt = options.issued_at
    const timestamp = new Timestamp()
    timestamp.fromDate(issuedAt)
    token.setIssuedAt(timestamp)
  }

  // 处理 expires_at 字段，列表项为 Timestamp 类型
  if ('expires_at' in options) {
    const expiresAt = options.expires_at
    const timestamp = new Timestamp()
    timestamp.fromDate(expiresAt)
    token.setExpiresAt(timestamp)
  }

  // 处理 domain 字段，列表项为 Domain 类型
  if ('domain' in options) {
    const domain = options.domain
    token.setDomain(generateDomain(domain))
  }

  // 处理 entity 字段，列表项为 Entity 类型
  if ('entity' in options) {
    const entity = options.entity
    token.setEntity(generateEntity(entity))
  }

  // 处理 credential 字段，列表项为 Credential 类型
  if ('credential' in options) {
    const credential = options.credential
    token.setCredential(generateCredential(credential))
  }

  // 处理 roles 字段，列表项为 Role 类型
  if ('roles' in options) {
    const list = options.roles
    const rolesList = []
    list.forEach(item => {
      rolesList.push(generateRole(item))
    })
    token.setRolesList(rolesList)
  }

  // 处理 groups 字段，列表项为 Group 类型
  if ('groups' in options) {
    const list = options.groups
    const groupsList = []
    list.forEach(item => {
      groupsList.push(generateGroup(item))
    })
    token.setGroupsList(groupsList)
  }

  return token
}
