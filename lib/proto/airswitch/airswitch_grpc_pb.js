// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var airswitch_pb = require('./airswitch_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_GetConfigRes(arg) {
  if (!(arg instanceof airswitch_pb.GetConfigRes)) {
    throw new Error('Expected argument of type GetConfigRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetConfigRes(buffer_arg) {
  return airswitch_pb.GetConfigRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetCtrlRes(arg) {
  if (!(arg instanceof airswitch_pb.GetCtrlRes)) {
    throw new Error('Expected argument of type GetCtrlRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetCtrlRes(buffer_arg) {
  return airswitch_pb.GetCtrlRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetDataRes(arg) {
  if (!(arg instanceof airswitch_pb.GetDataRes)) {
    throw new Error('Expected argument of type GetDataRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetDataRes(buffer_arg) {
  return airswitch_pb.GetDataRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetQualityRes(arg) {
  if (!(arg instanceof airswitch_pb.GetQualityRes)) {
    throw new Error('Expected argument of type GetQualityRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetQualityRes(buffer_arg) {
  return airswitch_pb.GetQualityRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetReq(arg) {
  if (!(arg instanceof airswitch_pb.GetReq)) {
    throw new Error('Expected argument of type GetReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetReq(buffer_arg) {
  return airswitch_pb.GetReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetStateRes(arg) {
  if (!(arg instanceof airswitch_pb.GetStateRes)) {
    throw new Error('Expected argument of type GetStateRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetStateRes(buffer_arg) {
  return airswitch_pb.GetStateRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetWarnRes(arg) {
  if (!(arg instanceof airswitch_pb.GetWarnRes)) {
    throw new Error('Expected argument of type GetWarnRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetWarnRes(buffer_arg) {
  return airswitch_pb.GetWarnRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetConfigReq(arg) {
  if (!(arg instanceof airswitch_pb.SetConfigReq)) {
    throw new Error('Expected argument of type SetConfigReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetConfigReq(buffer_arg) {
  return airswitch_pb.SetConfigReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetQualityReq(arg) {
  if (!(arg instanceof airswitch_pb.SetQualityReq)) {
    throw new Error('Expected argument of type SetQualityReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetQualityReq(buffer_arg) {
  return airswitch_pb.SetQualityReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetRes(arg) {
  if (!(arg instanceof airswitch_pb.SetRes)) {
    throw new Error('Expected argument of type SetRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetRes(buffer_arg) {
  return airswitch_pb.SetRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SetStateReq(arg) {
  if (!(arg instanceof airswitch_pb.SetStateReq)) {
    throw new Error('Expected argument of type SetStateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SetStateReq(buffer_arg) {
  return airswitch_pb.SetStateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceService = exports.ServiceService = {
  getState: {
    path: '/Service/GetState',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.GetReq,
    responseType: airswitch_pb.GetStateRes,
    requestSerialize: serialize_GetReq,
    requestDeserialize: deserialize_GetReq,
    responseSerialize: serialize_GetStateRes,
    responseDeserialize: deserialize_GetStateRes,
  },
  getCtrl: {
    path: '/Service/GetCtrl',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.GetReq,
    responseType: airswitch_pb.GetCtrlRes,
    requestSerialize: serialize_GetReq,
    requestDeserialize: deserialize_GetReq,
    responseSerialize: serialize_GetCtrlRes,
    responseDeserialize: deserialize_GetCtrlRes,
  },
  getWarn: {
    path: '/Service/GetWarn',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.GetReq,
    responseType: airswitch_pb.GetWarnRes,
    requestSerialize: serialize_GetReq,
    requestDeserialize: deserialize_GetReq,
    responseSerialize: serialize_GetWarnRes,
    responseDeserialize: deserialize_GetWarnRes,
  },
  getData: {
    path: '/Service/GetData',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.GetReq,
    responseType: airswitch_pb.GetDataRes,
    requestSerialize: serialize_GetReq,
    requestDeserialize: deserialize_GetReq,
    responseSerialize: serialize_GetDataRes,
    responseDeserialize: deserialize_GetDataRes,
  },
  getConfig: {
    path: '/Service/GetConfig',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.GetReq,
    responseType: airswitch_pb.GetConfigRes,
    requestSerialize: serialize_GetReq,
    requestDeserialize: deserialize_GetReq,
    responseSerialize: serialize_GetConfigRes,
    responseDeserialize: deserialize_GetConfigRes,
  },
  getQuality: {
    path: '/Service/GetQuality',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.GetReq,
    responseType: airswitch_pb.GetQualityRes,
    requestSerialize: serialize_GetReq,
    requestDeserialize: deserialize_GetReq,
    responseSerialize: serialize_GetQualityRes,
    responseDeserialize: deserialize_GetQualityRes,
  },
  setState: {
    path: '/Service/SetState',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.SetStateReq,
    responseType: airswitch_pb.SetRes,
    requestSerialize: serialize_SetStateReq,
    requestDeserialize: deserialize_SetStateReq,
    responseSerialize: serialize_SetRes,
    responseDeserialize: deserialize_SetRes,
  },
  setConfig: {
    path: '/Service/SetConfig',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.SetConfigReq,
    responseType: airswitch_pb.SetRes,
    requestSerialize: serialize_SetConfigReq,
    requestDeserialize: deserialize_SetConfigReq,
    responseSerialize: serialize_SetRes,
    responseDeserialize: deserialize_SetRes,
  },
  setQuality: {
    path: '/Service/SetQuality',
    requestStream: false,
    responseStream: false,
    requestType: airswitch_pb.SetQualityReq,
    responseType: airswitch_pb.SetRes,
    requestSerialize: serialize_SetQualityReq,
    requestDeserialize: deserialize_SetQualityReq,
    responseSerialize: serialize_SetRes,
    responseDeserialize: deserialize_SetRes,
  },
  setLeakTest: {
    path: '/Service/SetLeakTest',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: airswitch_pb.SetRes,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_SetRes,
    responseDeserialize: deserialize_SetRes,
  },
};

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService);
