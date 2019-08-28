/*
  message Domain {
    string id = 1;
    string name = 2;
    string alias = 3;
    Domain parent = 4;
    repeated Domain children = 5;
    map<string, string> extra = 6;
  }
*/
const {
  Domain
} = require('../../../proto/identityd2/model_pb')

function generateDomain (options) {
  // 构建 domain
  const domain = new Domain()

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
      domain[method](val)
    }
  })

  if ('parent' in options) {
    const parentVal = options.parent
    const temp = generateDomain(parentVal)
    domain.setParent(temp)
  }

  if ('children' in options) {
    const childrenVal = options.children
    const childrenList = []
    childrenVal.forEach(item => {
      const temp = generateDomain(item)
      childrenList.push(temp)
    })
    domain.setChildrenList(childrenList)
  }

  return domain
}

/**
 * 生成 Domain 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = generateDomain
