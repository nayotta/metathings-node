// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var device_issue_module_token_pb = require('../device/issue_module_token_pb.js');
var device_show_module_pb = require('../device/show_module_pb.js');
var device_heartbeat_pb = require('../device/heartbeat_pb.js');
var device_push_frame_to_flow_pb = require('../device/push_frame_to_flow_pb.js');
var device_put_object_pb = require('../device/put_object_pb.js');
var device_remove_object_pb = require('../device/remove_object_pb.js');
var device_rename_object_pb = require('../device/rename_object_pb.js');
var device_get_object_pb = require('../device/get_object_pb.js');
var device_get_object_content_pb = require('../device/get_object_content_pb.js');
var device_get_object_streaming_content_pb = require('../device/get_object_streaming_content_pb.js');
var device_list_objects_pb = require('../device/list_objects_pb.js');

function serialize_ai_metathings_service_device_GetObjectContentRequest(arg) {
  if (!(arg instanceof device_get_object_content_pb.GetObjectContentRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.GetObjectContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_GetObjectContentRequest(buffer_arg) {
  return device_get_object_content_pb.GetObjectContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_GetObjectContentResponse(arg) {
  if (!(arg instanceof device_get_object_content_pb.GetObjectContentResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.device.GetObjectContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_GetObjectContentResponse(buffer_arg) {
  return device_get_object_content_pb.GetObjectContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_GetObjectRequest(arg) {
  if (!(arg instanceof device_get_object_pb.GetObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.GetObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_GetObjectRequest(buffer_arg) {
  return device_get_object_pb.GetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_GetObjectResponse(arg) {
  if (!(arg instanceof device_get_object_pb.GetObjectResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.device.GetObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_GetObjectResponse(buffer_arg) {
  return device_get_object_pb.GetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_GetObjectStreamingContentRequest(arg) {
  if (!(arg instanceof device_get_object_streaming_content_pb.GetObjectStreamingContentRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.GetObjectStreamingContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_GetObjectStreamingContentRequest(buffer_arg) {
  return device_get_object_streaming_content_pb.GetObjectStreamingContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_GetObjectStreamingContentResponse(arg) {
  if (!(arg instanceof device_get_object_streaming_content_pb.GetObjectStreamingContentResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.device.GetObjectStreamingContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_GetObjectStreamingContentResponse(buffer_arg) {
  return device_get_object_streaming_content_pb.GetObjectStreamingContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_HeartbeatRequest(arg) {
  if (!(arg instanceof device_heartbeat_pb.HeartbeatRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.HeartbeatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_HeartbeatRequest(buffer_arg) {
  return device_heartbeat_pb.HeartbeatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_IssueModuleTokenRequest(arg) {
  if (!(arg instanceof device_issue_module_token_pb.IssueModuleTokenRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.IssueModuleTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_IssueModuleTokenRequest(buffer_arg) {
  return device_issue_module_token_pb.IssueModuleTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_IssueModuleTokenResponse(arg) {
  if (!(arg instanceof device_issue_module_token_pb.IssueModuleTokenResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.device.IssueModuleTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_IssueModuleTokenResponse(buffer_arg) {
  return device_issue_module_token_pb.IssueModuleTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_ListObjectsRequest(arg) {
  if (!(arg instanceof device_list_objects_pb.ListObjectsRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.ListObjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_ListObjectsRequest(buffer_arg) {
  return device_list_objects_pb.ListObjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_ListObjectsResponse(arg) {
  if (!(arg instanceof device_list_objects_pb.ListObjectsResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.device.ListObjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_ListObjectsResponse(buffer_arg) {
  return device_list_objects_pb.ListObjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_PushFrameToFlowRequest(arg) {
  if (!(arg instanceof device_push_frame_to_flow_pb.PushFrameToFlowRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.PushFrameToFlowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_PushFrameToFlowRequest(buffer_arg) {
  return device_push_frame_to_flow_pb.PushFrameToFlowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_PushFrameToFlowResponse(arg) {
  if (!(arg instanceof device_push_frame_to_flow_pb.PushFrameToFlowResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.device.PushFrameToFlowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_PushFrameToFlowResponse(buffer_arg) {
  return device_push_frame_to_flow_pb.PushFrameToFlowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_PutObjectRequest(arg) {
  if (!(arg instanceof device_put_object_pb.PutObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.PutObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_PutObjectRequest(buffer_arg) {
  return device_put_object_pb.PutObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_RemoveObjectRequest(arg) {
  if (!(arg instanceof device_remove_object_pb.RemoveObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.RemoveObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_RemoveObjectRequest(buffer_arg) {
  return device_remove_object_pb.RemoveObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_RenameObjectRequest(arg) {
  if (!(arg instanceof device_rename_object_pb.RenameObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.device.RenameObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_RenameObjectRequest(buffer_arg) {
  return device_rename_object_pb.RenameObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_device_ShowModuleResponse(arg) {
  if (!(arg instanceof device_show_module_pb.ShowModuleResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.device.ShowModuleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_device_ShowModuleResponse(buffer_arg) {
  return device_show_module_pb.ShowModuleResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var DeviceServiceService = exports.DeviceServiceService = {
  issueModuleToken: {
    path: '/ai.metathings.service.device.DeviceService/IssueModuleToken',
    requestStream: false,
    responseStream: false,
    requestType: device_issue_module_token_pb.IssueModuleTokenRequest,
    responseType: device_issue_module_token_pb.IssueModuleTokenResponse,
    requestSerialize: serialize_ai_metathings_service_device_IssueModuleTokenRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_IssueModuleTokenRequest,
    responseSerialize: serialize_ai_metathings_service_device_IssueModuleTokenResponse,
    responseDeserialize: deserialize_ai_metathings_service_device_IssueModuleTokenResponse,
  },
  showModule: {
    path: '/ai.metathings.service.device.DeviceService/ShowModule',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: device_show_module_pb.ShowModuleResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ai_metathings_service_device_ShowModuleResponse,
    responseDeserialize: deserialize_ai_metathings_service_device_ShowModuleResponse,
  },
  heartbeat: {
    path: '/ai.metathings.service.device.DeviceService/Heartbeat',
    requestStream: false,
    responseStream: false,
    requestType: device_heartbeat_pb.HeartbeatRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_device_HeartbeatRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_HeartbeatRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  pushFrameToFlow: {
    path: '/ai.metathings.service.device.DeviceService/PushFrameToFlow',
    requestStream: true,
    responseStream: true,
    requestType: device_push_frame_to_flow_pb.PushFrameToFlowRequest,
    responseType: device_push_frame_to_flow_pb.PushFrameToFlowResponse,
    requestSerialize: serialize_ai_metathings_service_device_PushFrameToFlowRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_PushFrameToFlowRequest,
    responseSerialize: serialize_ai_metathings_service_device_PushFrameToFlowResponse,
    responseDeserialize: deserialize_ai_metathings_service_device_PushFrameToFlowResponse,
  },
  putObject: {
    path: '/ai.metathings.service.device.DeviceService/PutObject',
    requestStream: false,
    responseStream: false,
    requestType: device_put_object_pb.PutObjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_device_PutObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_PutObjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  removeObject: {
    path: '/ai.metathings.service.device.DeviceService/RemoveObject',
    requestStream: false,
    responseStream: false,
    requestType: device_remove_object_pb.RemoveObjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_device_RemoveObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_RemoveObjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  renameObject: {
    path: '/ai.metathings.service.device.DeviceService/RenameObject',
    requestStream: false,
    responseStream: false,
    requestType: device_rename_object_pb.RenameObjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_device_RenameObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_RenameObjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getObject: {
    path: '/ai.metathings.service.device.DeviceService/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: device_get_object_pb.GetObjectRequest,
    responseType: device_get_object_pb.GetObjectResponse,
    requestSerialize: serialize_ai_metathings_service_device_GetObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_GetObjectRequest,
    responseSerialize: serialize_ai_metathings_service_device_GetObjectResponse,
    responseDeserialize: deserialize_ai_metathings_service_device_GetObjectResponse,
  },
  getObjectContent: {
    path: '/ai.metathings.service.device.DeviceService/GetObjectContent',
    requestStream: false,
    responseStream: false,
    requestType: device_get_object_content_pb.GetObjectContentRequest,
    responseType: device_get_object_content_pb.GetObjectContentResponse,
    requestSerialize: serialize_ai_metathings_service_device_GetObjectContentRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_GetObjectContentRequest,
    responseSerialize: serialize_ai_metathings_service_device_GetObjectContentResponse,
    responseDeserialize: deserialize_ai_metathings_service_device_GetObjectContentResponse,
  },
  getObjectStreamingContent: {
    path: '/ai.metathings.service.device.DeviceService/GetObjectStreamingContent',
    requestStream: false,
    responseStream: false,
    requestType: device_get_object_streaming_content_pb.GetObjectStreamingContentRequest,
    responseType: device_get_object_streaming_content_pb.GetObjectStreamingContentResponse,
    requestSerialize: serialize_ai_metathings_service_device_GetObjectStreamingContentRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_GetObjectStreamingContentRequest,
    responseSerialize: serialize_ai_metathings_service_device_GetObjectStreamingContentResponse,
    responseDeserialize: deserialize_ai_metathings_service_device_GetObjectStreamingContentResponse,
  },
  listObjects: {
    path: '/ai.metathings.service.device.DeviceService/ListObjects',
    requestStream: false,
    responseStream: false,
    requestType: device_list_objects_pb.ListObjectsRequest,
    responseType: device_list_objects_pb.ListObjectsResponse,
    requestSerialize: serialize_ai_metathings_service_device_ListObjectsRequest,
    requestDeserialize: deserialize_ai_metathings_service_device_ListObjectsRequest,
    responseSerialize: serialize_ai_metathings_service_device_ListObjectsResponse,
    responseDeserialize: deserialize_ai_metathings_service_device_ListObjectsResponse,
  },
};

exports.DeviceServiceClient = grpc.makeGenericClientConstructor(DeviceServiceService);
