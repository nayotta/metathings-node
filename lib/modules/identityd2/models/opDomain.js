/*
  message OpDomain {
    google.protobuf.StringValue id = 1;
    google.protobuf.StringValue name = 2;
    google.protobuf.StringValue alias = 3;
    OpDomain parent = 4;
    repeated OpDomain children = 5;
    map<string, google.protobuf.StringValue> extra = 6;
  }
*/
const {
  StringValue
} = require('google-protobuf/google/protobuf/wrappers_pb.js')

const {
  OpDomain
} = require('../../../proto/identityd2/model_pb')

function generateOpDomain (options) {
  // 构建 opDomain
  const opDomain = new OpDomain()

  // 属性对应的方法
  const KEY_METHODS = {
    id: 'setId',
    name: 'setName',
    alias: 'setAlias'
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
      opDomain[method](temp)
    }
  })

  if ('parent' in options) {
    const parentVal = options.parent
    const temp = generateOpDomain(parentVal)
    opDomain.setParent(temp)
  }

  if ('children' in options) {
    const childrenVal = options.children
    const childrenList = []
    childrenVal.forEach(item => {
      const temp = generateOpDomain(item)
      childrenList.push(temp)
    })
    opDomain.setChildrenList(childrenList)
  }

  return opDomain
}

/**
 * 生成 OpDomain 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = generateOpDomain
