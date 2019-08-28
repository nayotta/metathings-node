// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');

function serialize_mtpd_ListDevicesByApplicationRequest(arg) {
  if (!(arg instanceof service_pb.ListDevicesByApplicationRequest)) {
    throw new Error('Expected argument of type mtpd.ListDevicesByApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mtpd_ListDevicesByApplicationRequest(buffer_arg) {
  return service_pb.ListDevicesByApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mtpd_ListDevicesByApplicationResponse(arg) {
  if (!(arg instanceof service_pb.ListDevicesByApplicationResponse)) {
    throw new Error('Expected argument of type mtpd.ListDevicesByApplicationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mtpd_ListDevicesByApplicationResponse(buffer_arg) {
  return service_pb.ListDevicesByApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MetaPlatformSrvService = exports.MetaPlatformSrvService = {
  listDevicesByApplication: {
    path: '/mtpd.MetaPlatformSrv/ListDevicesByApplication',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.ListDevicesByApplicationRequest,
    responseType: service_pb.ListDevicesByApplicationResponse,
    requestSerialize: serialize_mtpd_ListDevicesByApplicationRequest,
    requestDeserialize: deserialize_mtpd_ListDevicesByApplicationRequest,
    responseSerialize: serialize_mtpd_ListDevicesByApplicationResponse,
    responseDeserialize: deserialize_mtpd_ListDevicesByApplicationResponse,
  },
};

exports.MetaPlatformSrvClient = grpc.makeGenericClientConstructor(MetaPlatformSrvService);
