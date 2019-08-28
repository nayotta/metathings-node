const fs = require('fs')
const path = require('path')

/**
 *  引入 Model目录下 非 index.js 的模块
 *
 * @param {*} dir 目录
 * @returns
 */
function mapModelDir (dir) {
  const tree = {}

  fs.readdirSync(dir).forEach(file => {
    if (path.extname(file) === '.js' && (file.indexOf('index') !== 0)) {
      tree[`generate${upperCaseFirstLetter(path.basename(file, '.js'))}`] = require(path.join(dir, file))
    }
  })

  return tree
}

/**
 *  引入 service 目录下 非 index.js 的模块
 *
 * @param {*} dir 目录
 * @returns
 */
function mapServiceDir (dir) {
  let tree = {}

  fs.readdirSync(dir).forEach(file => {
    if (path.extname(file) === '.js' && (file.indexOf('index') !== 0)) {
      const temp = require(path.join(dir, file))
      tree = {
        ...tree,
        ...temp
      }
    }
  })

  return tree
}

/**
 * 首字母转小写
 *
 * @param {*} string 待转换字符串
 * @returns
 */
function lowerCaseFirstLetter (string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

/**
 * 首字母转大写
 *
 * @param {*} string 待转换字符串
 * @returns
 */
function upperCaseFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
  mapModelDir,
  mapServiceDir,
  lowerCaseFirstLetter,
  upperCaseFirstLetter
}
