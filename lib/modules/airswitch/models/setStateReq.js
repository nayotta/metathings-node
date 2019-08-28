/*
  message SetStateReq {
    int32 addr = 1;
    OpState state = 2;
  }
*/
const {
  SetStateReq
} = require('../../../proto/airswitch/airswitch_pb')

const generateOpState = require('./opState')
/**
 * 生成 Module 数据
 *
 * @param {*} options
 * @returns
 */
module.exports = function (options) {
  // 构建 setStateReq
  const setStateReq = new SetStateReq()

  if ('state' in options) {
    const stateVal = options.state
    const opState = generateOpState(stateVal)
    setStateReq.setState(opState)
  }

  if ('addr' in options) {
    const addrVal = options.addr
    setStateReq.setAddr(addrVal)
  }

  return setStateReq
}
