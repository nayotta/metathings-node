const {
  Int64Value
} = require('google-protobuf/google/protobuf/wrappers_pb')

const {
  ConnectRequest,
  ConnectResponse
} = require('../../proto/deviced/connect_pb')

const {
  generateUnaryCallValue,
  generateStreamCallValue,
  generateOpUnaryCallValue,
  generateOpStreamCallValue,
  generateErrorValue
} = require('./models')

/*
  enum ConnectMessageKind {
    CONNECT_MESSAGE_KIND_UNKNOWN = 0;
    CONNECT_MESSAGE_KIND_SYSTEM = 1;
    CONNECT_MESSAGE_KIND_USER = 2;
  }
*/

/**
 *  生成 ConnectRequest 数据
 *  message ConnectRequest {
      google.protobuf.Int64Value session_id = 1 [(validator.field) = {msg_exists: true}];
      ConnectMessageKind kind = 2 [(validator.field) = {msg_exists: true}];
      oneof union {
        OpUnaryCallValue unary_call = 3;
        OpStreamCallValue stream_call = 4;
      }
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateConnectRequest (options) {
  if (!('session_id' in options)) {
    throw new Error('session_id is required!')
  }

  if (!('kind' in options)) {
    throw new Error('kind is required!')
  }

  // 构建 connectRequest
  const connectRequest = new ConnectRequest()

  const {
    session_id: sessionIdVal,
    kind: kindVal
  } = options

  // 处理对应数据类型
  const sessionId = new Int64Value()
  sessionId.setValue(sessionIdVal)
  connectRequest.setSessionId(sessionId)

  connectRequest.setKind(kindVal)

  if ('unary_call' in options) {
    const unaryCallVal = options.unary_call
    const opUnaryCall = generateOpUnaryCallValue(unaryCallVal)
    connectRequest.setUnaryCall(opUnaryCall)
  }

  if ('stream_call' in options) {
    const streamCallVal = options.stream_call
    const opStreamCall = generateOpStreamCallValue(streamCallVal)
    connectRequest.setStreamCall(opStreamCall)
  }

  return connectRequest
}

/**
 *  生成 ConnectResponse 数据
 *  message ConnectResponse {
      int64 session_id = 1;
      ConnectMessageKind kind = 2;
      oneof union {
        UnaryCallValue unary_call = 3;
        StreamCallValue stream_call = 4;
        ErrorValue err = 9;
      }
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generateConnectResponse (options) {
  // 构建 connectResponse
  const connectResponse = new ConnectResponse()

  // 处理对应数据类型
  if ('session_id' in options) {
    const sessionIdVal = options.session_id
    connectResponse.setSessionId(sessionIdVal)
  }

  if ('kind' in options) {
    const kindVal = options.kind
    connectResponse.setKind(kindVal)
  }

  if ('unary_call' in options) {
    const unaryCallVal = options.unary_call
    const unaryCall = generateUnaryCallValue(unaryCallVal)
    connectResponse.setUnaryCall(unaryCall)
  }

  if ('stream_call' in options) {
    const streamCallVal = options.stream_call
    const streamCall = generateStreamCallValue(streamCallVal)
    connectResponse.setStreamCall(streamCall)
  }

  if ('err' in options) {
    const errVal = options.err
    const err = generateErrorValue(errVal)
    connectResponse.setErr(err)
  }

  return connectResponse
}

module.exports = {
  generateConnectRequest,
  generateConnectResponse
}
