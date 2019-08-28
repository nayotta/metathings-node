/*
  message OpRole {
    google.protobuf.StringValue id = 1;
    google.protobuf.StringValue name = 2;
    google.protobuf.StringValue alias = 3;
    repeated OpAction actions = 4;
    google.protobuf.StringValue description = 5;
    map<string, google.protobuf.StringValue> extra = 6;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  OpRole
} = require('../../../proto/identityd2/model_pb')
const generateOpAction = require('./opAction')

/**
 * 生成 OpRole 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opRole
  const opRole = new OpRole()

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
      opRole[method](temp)
    }
  })

  // 处理 actions 字段，列表项为 Action 类型
  if ('actions' in options) {
    const list = options.actions
    const opActionsList = []
    list.forEach(item => {
      opActionsList.push(generateOpAction(item))
    })
    opRole.setActionsList(opActionsList)
  }

  return opRole
}
