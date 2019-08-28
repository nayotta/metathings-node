// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var tagd_tag_pb = require('../tagd/tag_pb.js');
var tagd_untag_pb = require('../tagd/untag_pb.js');
var tagd_remove_pb = require('../tagd/remove_pb.js');
var tagd_get_pb = require('../tagd/get_pb.js');
var tagd_query_pb = require('../tagd/query_pb.js');

function serialize_ai_metathings_service_tagd_GetRequest(arg) {
  if (!(arg instanceof tagd_get_pb.GetRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.tagd.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_tagd_GetRequest(buffer_arg) {
  return tagd_get_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_tagd_GetResponse(arg) {
  if (!(arg instanceof tagd_get_pb.GetResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.tagd.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_tagd_GetResponse(buffer_arg) {
  return tagd_get_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_tagd_QueryRequest(arg) {
  if (!(arg instanceof tagd_query_pb.QueryRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.tagd.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_tagd_QueryRequest(buffer_arg) {
  return tagd_query_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_tagd_QueryResponse(arg) {
  if (!(arg instanceof tagd_query_pb.QueryResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.tagd.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_tagd_QueryResponse(buffer_arg) {
  return tagd_query_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_tagd_RemoveRequest(arg) {
  if (!(arg instanceof tagd_remove_pb.RemoveRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.tagd.RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_tagd_RemoveRequest(buffer_arg) {
  return tagd_remove_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_tagd_TagRequest(arg) {
  if (!(arg instanceof tagd_tag_pb.TagRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.tagd.TagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_tagd_TagRequest(buffer_arg) {
  return tagd_tag_pb.TagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_tagd_UntagRequest(arg) {
  if (!(arg instanceof tagd_untag_pb.UntagRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.tagd.UntagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_tagd_UntagRequest(buffer_arg) {
  return tagd_untag_pb.UntagRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var TagdServiceService = exports.TagdServiceService = {
  tag: {
    path: '/ai.metathings.service.tagd.TagdService/Tag',
    requestStream: false,
    responseStream: false,
    requestType: tagd_tag_pb.TagRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_tagd_TagRequest,
    requestDeserialize: deserialize_ai_metathings_service_tagd_TagRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  untag: {
    path: '/ai.metathings.service.tagd.TagdService/Untag',
    requestStream: false,
    responseStream: false,
    requestType: tagd_untag_pb.UntagRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_tagd_UntagRequest,
    requestDeserialize: deserialize_ai_metathings_service_tagd_UntagRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  remove: {
    path: '/ai.metathings.service.tagd.TagdService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: tagd_remove_pb.RemoveRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_tagd_RemoveRequest,
    requestDeserialize: deserialize_ai_metathings_service_tagd_RemoveRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  get: {
    path: '/ai.metathings.service.tagd.TagdService/Get',
    requestStream: false,
    responseStream: false,
    requestType: tagd_get_pb.GetRequest,
    responseType: tagd_get_pb.GetResponse,
    requestSerialize: serialize_ai_metathings_service_tagd_GetRequest,
    requestDeserialize: deserialize_ai_metathings_service_tagd_GetRequest,
    responseSerialize: serialize_ai_metathings_service_tagd_GetResponse,
    responseDeserialize: deserialize_ai_metathings_service_tagd_GetResponse,
  },
  query: {
    path: '/ai.metathings.service.tagd.TagdService/Query',
    requestStream: false,
    responseStream: false,
    requestType: tagd_query_pb.QueryRequest,
    responseType: tagd_query_pb.QueryResponse,
    requestSerialize: serialize_ai_metathings_service_tagd_QueryRequest,
    requestDeserialize: deserialize_ai_metathings_service_tagd_QueryRequest,
    responseSerialize: serialize_ai_metathings_service_tagd_QueryResponse,
    responseDeserialize: deserialize_ai_metathings_service_tagd_QueryResponse,
  },
};

exports.TagdServiceClient = grpc.makeGenericClientConstructor(TagdServiceService);
