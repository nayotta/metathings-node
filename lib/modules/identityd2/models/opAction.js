/*
  message OpAction {
    google.protobuf.StringValue id = 1;
    google.protobuf.StringValue name = 2;
    google.protobuf.StringValue alias = 3;
    google.protobuf.StringValue description = 4;
    map<string, google.protobuf.StringValue> extra = 5;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  OpAction
} = require('../../../proto/identityd2/model_pb')

/**
 * 生成 OpAction 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 opAction
  const opAction = new OpAction()

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
      opAction[method](temp)
    }
  })

  return opAction
}
