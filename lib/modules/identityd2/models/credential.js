/*
  message Credential {
    string id = 1;
    Domain domain = 2;
    repeated Role roles = 3;
    Entity entity = 4;
    string name = 5;
    string alias = 6;
    string secret = 7;
    string description = 8;
    google.protobuf.Timestamp expires_at = 9;
  }
*/
const {
  Timestamp
} = require('google-protobuf/google/protobuf/timestamp_pb')

const {
  Credential
} = require('../../../proto/identityd2/model_pb')
const generateDomain = require('./domain')
const generateRole = require('./role')
const generateEntity = require('./entity')

/**
 * 生成 Credential 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 credential
  const credential = new Credential()

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
      credential[method](val)
    }
  })

  // 处理 expires_at 字段，列表项为 Timestamp 类型
  if ('expires_at' in options) {
    const expiresAt = options.expires_at
    const timestamp = new Timestamp()
    timestamp.fromDate(expiresAt)
    credential.setExpiresAt(timestamp)
  }

  // 处理 domain 字段，列表项为 Domain 类型
  if ('domain' in options) {
    const domain = options.domain
    credential.setDomain(generateDomain(domain))
  }

  // 处理 roles 字段，列表项为 Role 类型
  if ('roles' in options) {
    const list = options.roles
    const rolesList = []
    list.forEach(item => {
      rolesList.push(generateRole(item))
    })
    credential.setRolesList(rolesList)
  }

  // 处理 entity 字段，列表项为 Entity 类型
  if ('entity' in options) {
    const entity = options.entity
    credential.setEntity(generateEntity(entity))
  }

  return credential
}
