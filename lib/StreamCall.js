/**
 *  流调用
 *
 * @class StreamCall
 */
class StreamCall {
  constructor (call, request) {
    this._call = call
    this._request = request
  }

  /**
   *  发送数据
   *
   * @param {*} {
   *     data
   *   }
   * @memberof StreamCall
   */
  send ({
    data
  }) {
    const {
      _call: call,
      _request: request
    } = this
    if (request) {
      call.write(request(data))
    }
  }

  /**
   * 监听 流收到数据
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onData (callback) {
    this._call.on('data', callback)
  }

  /**
   *  监听流 错误 事件
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onError (callback) {
    this._call.on('error', callback)
  }

  /**
   *  监听流 状态变化事件
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onStatus (callback) {
    this._call.on('status', callback)
  }

  /**
   *  监听 流 关闭事件
   *
   * @param {*} callback
   * @memberof StreamCall
   */
  onEnd (callback) {
    this._call.on('end', callback)
  }

  /**
   *  结束流
   *
   * @memberof StreamCall
   */
  end () {
    this._call.end()
  }

  /**
   *  取消流
   *
   * @memberof StreamCall
   */
  cancel () {
    this._call.cancel()
  }
}

module.exports = StreamCall
