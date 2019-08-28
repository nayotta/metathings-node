// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var component_unary_call_pb = require('../component/unary_call_pb.js');
var component_stream_call_pb = require('../component/stream_call_pb.js');

function serialize_ai_metathings_component_StreamCallRequest(arg) {
  if (!(arg instanceof component_stream_call_pb.StreamCallRequest)) {
    throw new Error('Expected argument of type ai.metathings.component.StreamCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_component_StreamCallRequest(buffer_arg) {
  return component_stream_call_pb.StreamCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_component_StreamCallResponse(arg) {
  if (!(arg instanceof component_stream_call_pb.StreamCallResponse)) {
    throw new Error('Expected argument of type ai.metathings.component.StreamCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_component_StreamCallResponse(buffer_arg) {
  return component_stream_call_pb.StreamCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_component_UnaryCallRequest(arg) {
  if (!(arg instanceof component_unary_call_pb.UnaryCallRequest)) {
    throw new Error('Expected argument of type ai.metathings.component.UnaryCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_component_UnaryCallRequest(buffer_arg) {
  return component_unary_call_pb.UnaryCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_component_UnaryCallResponse(arg) {
  if (!(arg instanceof component_unary_call_pb.UnaryCallResponse)) {
    throw new Error('Expected argument of type ai.metathings.component.UnaryCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_component_UnaryCallResponse(buffer_arg) {
  return component_unary_call_pb.UnaryCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ModuleServiceService = exports.ModuleServiceService = {
  unaryCall: {
    path: '/ai.metathings.component.ModuleService/UnaryCall',
    requestStream: false,
    responseStream: false,
    requestType: component_unary_call_pb.UnaryCallRequest,
    responseType: component_unary_call_pb.UnaryCallResponse,
    requestSerialize: serialize_ai_metathings_component_UnaryCallRequest,
    requestDeserialize: deserialize_ai_metathings_component_UnaryCallRequest,
    responseSerialize: serialize_ai_metathings_component_UnaryCallResponse,
    responseDeserialize: deserialize_ai_metathings_component_UnaryCallResponse,
  },
  streamCall: {
    path: '/ai.metathings.component.ModuleService/StreamCall',
    requestStream: true,
    responseStream: true,
    requestType: component_stream_call_pb.StreamCallRequest,
    responseType: component_stream_call_pb.StreamCallResponse,
    requestSerialize: serialize_ai_metathings_component_StreamCallRequest,
    requestDeserialize: deserialize_ai_metathings_component_StreamCallRequest,
    responseSerialize: serialize_ai_metathings_component_StreamCallResponse,
    responseDeserialize: deserialize_ai_metathings_component_StreamCallResponse,
  },
};

exports.ModuleServiceClient = grpc.makeGenericClientConstructor(ModuleServiceService);
