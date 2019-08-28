// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var deviced_create_device_pb = require('../deviced/create_device_pb.js');
var deviced_delete_device_pb = require('../deviced/delete_device_pb.js');
var deviced_patch_device_pb = require('../deviced/patch_device_pb.js');
var deviced_get_device_pb = require('../deviced/get_device_pb.js');
var deviced_list_devices_pb = require('../deviced/list_devices_pb.js');
var deviced_get_device_by_module_pb = require('../deviced/get_device_by_module_pb.js');
var deviced_unary_call_pb = require('../deviced/unary_call_pb.js');
var deviced_stream_call_pb = require('../deviced/stream_call_pb.js');
var deviced_pull_frame_from_flow_pb = require('../deviced/pull_frame_from_flow_pb.js');
var deviced_push_frame_to_flow_pb = require('../deviced/push_frame_to_flow_pb.js');
var deviced_query_frames_from_flow_pb = require('../deviced/query_frames_from_flow_pb.js');
var deviced_put_object_pb = require('../deviced/put_object_pb.js');
var deviced_remove_object_pb = require('../deviced/remove_object_pb.js');
var deviced_rename_object_pb = require('../deviced/rename_object_pb.js');
var deviced_get_object_pb = require('../deviced/get_object_pb.js');
var deviced_get_object_content_pb = require('../deviced/get_object_content_pb.js');
var deviced_get_object_streaming_content_pb = require('../deviced/get_object_streaming_content_pb.js');
var deviced_list_objects_pb = require('../deviced/list_objects_pb.js');
var deviced_show_device_pb = require('../deviced/show_device_pb.js');
var deviced_connect_pb = require('../deviced/connect_pb.js');
var deviced_heartbeat_pb = require('../deviced/heartbeat_pb.js');

function serialize_ai_metathings_service_deviced_ConnectRequest(arg) {
  if (!(arg instanceof deviced_connect_pb.ConnectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.ConnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_ConnectRequest(buffer_arg) {
  return deviced_connect_pb.ConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_ConnectResponse(arg) {
  if (!(arg instanceof deviced_connect_pb.ConnectResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.ConnectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_ConnectResponse(buffer_arg) {
  return deviced_connect_pb.ConnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_CreateDeviceRequest(arg) {
  if (!(arg instanceof deviced_create_device_pb.CreateDeviceRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.CreateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_CreateDeviceRequest(buffer_arg) {
  return deviced_create_device_pb.CreateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_CreateDeviceResponse(arg) {
  if (!(arg instanceof deviced_create_device_pb.CreateDeviceResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.CreateDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_CreateDeviceResponse(buffer_arg) {
  return deviced_create_device_pb.CreateDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_DeleteDeviceRequest(arg) {
  if (!(arg instanceof deviced_delete_device_pb.DeleteDeviceRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.DeleteDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_DeleteDeviceRequest(buffer_arg) {
  return deviced_delete_device_pb.DeleteDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetDeviceByModuleRequest(arg) {
  if (!(arg instanceof deviced_get_device_by_module_pb.GetDeviceByModuleRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetDeviceByModuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetDeviceByModuleRequest(buffer_arg) {
  return deviced_get_device_by_module_pb.GetDeviceByModuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetDeviceByModuleResponse(arg) {
  if (!(arg instanceof deviced_get_device_by_module_pb.GetDeviceByModuleResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetDeviceByModuleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetDeviceByModuleResponse(buffer_arg) {
  return deviced_get_device_by_module_pb.GetDeviceByModuleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetDeviceRequest(arg) {
  if (!(arg instanceof deviced_get_device_pb.GetDeviceRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetDeviceRequest(buffer_arg) {
  return deviced_get_device_pb.GetDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetDeviceResponse(arg) {
  if (!(arg instanceof deviced_get_device_pb.GetDeviceResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetDeviceResponse(buffer_arg) {
  return deviced_get_device_pb.GetDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetObjectContentRequest(arg) {
  if (!(arg instanceof deviced_get_object_content_pb.GetObjectContentRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetObjectContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetObjectContentRequest(buffer_arg) {
  return deviced_get_object_content_pb.GetObjectContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetObjectContentResponse(arg) {
  if (!(arg instanceof deviced_get_object_content_pb.GetObjectContentResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetObjectContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetObjectContentResponse(buffer_arg) {
  return deviced_get_object_content_pb.GetObjectContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetObjectRequest(arg) {
  if (!(arg instanceof deviced_get_object_pb.GetObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetObjectRequest(buffer_arg) {
  return deviced_get_object_pb.GetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetObjectResponse(arg) {
  if (!(arg instanceof deviced_get_object_pb.GetObjectResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetObjectResponse(buffer_arg) {
  return deviced_get_object_pb.GetObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetObjectStreamingContentRequest(arg) {
  if (!(arg instanceof deviced_get_object_streaming_content_pb.GetObjectStreamingContentRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetObjectStreamingContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetObjectStreamingContentRequest(buffer_arg) {
  return deviced_get_object_streaming_content_pb.GetObjectStreamingContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_GetObjectStreamingContentResponse(arg) {
  if (!(arg instanceof deviced_get_object_streaming_content_pb.GetObjectStreamingContentResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.GetObjectStreamingContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_GetObjectStreamingContentResponse(buffer_arg) {
  return deviced_get_object_streaming_content_pb.GetObjectStreamingContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_HeartbeatRequest(arg) {
  if (!(arg instanceof deviced_heartbeat_pb.HeartbeatRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.HeartbeatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_HeartbeatRequest(buffer_arg) {
  return deviced_heartbeat_pb.HeartbeatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_ListDevicesRequest(arg) {
  if (!(arg instanceof deviced_list_devices_pb.ListDevicesRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.ListDevicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_ListDevicesRequest(buffer_arg) {
  return deviced_list_devices_pb.ListDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_ListDevicesResponse(arg) {
  if (!(arg instanceof deviced_list_devices_pb.ListDevicesResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.ListDevicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_ListDevicesResponse(buffer_arg) {
  return deviced_list_devices_pb.ListDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_ListObjectsRequest(arg) {
  if (!(arg instanceof deviced_list_objects_pb.ListObjectsRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.ListObjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_ListObjectsRequest(buffer_arg) {
  return deviced_list_objects_pb.ListObjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_ListObjectsResponse(arg) {
  if (!(arg instanceof deviced_list_objects_pb.ListObjectsResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.ListObjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_ListObjectsResponse(buffer_arg) {
  return deviced_list_objects_pb.ListObjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_PatchDeviceRequest(arg) {
  if (!(arg instanceof deviced_patch_device_pb.PatchDeviceRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.PatchDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_PatchDeviceRequest(buffer_arg) {
  return deviced_patch_device_pb.PatchDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_PatchDeviceResponse(arg) {
  if (!(arg instanceof deviced_patch_device_pb.PatchDeviceResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.PatchDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_PatchDeviceResponse(buffer_arg) {
  return deviced_patch_device_pb.PatchDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_PullFrameFromFlowRequest(arg) {
  if (!(arg instanceof deviced_pull_frame_from_flow_pb.PullFrameFromFlowRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.PullFrameFromFlowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_PullFrameFromFlowRequest(buffer_arg) {
  return deviced_pull_frame_from_flow_pb.PullFrameFromFlowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_PullFrameFromFlowResponse(arg) {
  if (!(arg instanceof deviced_pull_frame_from_flow_pb.PullFrameFromFlowResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.PullFrameFromFlowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_PullFrameFromFlowResponse(buffer_arg) {
  return deviced_pull_frame_from_flow_pb.PullFrameFromFlowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_PushFrameToFlowRequest(arg) {
  if (!(arg instanceof deviced_push_frame_to_flow_pb.PushFrameToFlowRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.PushFrameToFlowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_PushFrameToFlowRequest(buffer_arg) {
  return deviced_push_frame_to_flow_pb.PushFrameToFlowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_PushFrameToFlowResponse(arg) {
  if (!(arg instanceof deviced_push_frame_to_flow_pb.PushFrameToFlowResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.PushFrameToFlowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_PushFrameToFlowResponse(buffer_arg) {
  return deviced_push_frame_to_flow_pb.PushFrameToFlowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_PutObjectRequest(arg) {
  if (!(arg instanceof deviced_put_object_pb.PutObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.PutObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_PutObjectRequest(buffer_arg) {
  return deviced_put_object_pb.PutObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_QueryFramesFromFlowRequest(arg) {
  if (!(arg instanceof deviced_query_frames_from_flow_pb.QueryFramesFromFlowRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.QueryFramesFromFlowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_QueryFramesFromFlowRequest(buffer_arg) {
  return deviced_query_frames_from_flow_pb.QueryFramesFromFlowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_QueryFramesFromFlowResponse(arg) {
  if (!(arg instanceof deviced_query_frames_from_flow_pb.QueryFramesFromFlowResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.QueryFramesFromFlowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_QueryFramesFromFlowResponse(buffer_arg) {
  return deviced_query_frames_from_flow_pb.QueryFramesFromFlowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_RemoveObjectRequest(arg) {
  if (!(arg instanceof deviced_remove_object_pb.RemoveObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.RemoveObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_RemoveObjectRequest(buffer_arg) {
  return deviced_remove_object_pb.RemoveObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_RenameObjectRequest(arg) {
  if (!(arg instanceof deviced_rename_object_pb.RenameObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.RenameObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_RenameObjectRequest(buffer_arg) {
  return deviced_rename_object_pb.RenameObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_ShowDeviceResponse(arg) {
  if (!(arg instanceof deviced_show_device_pb.ShowDeviceResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.ShowDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_ShowDeviceResponse(buffer_arg) {
  return deviced_show_device_pb.ShowDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_StreamCallRequest(arg) {
  if (!(arg instanceof deviced_stream_call_pb.StreamCallRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.StreamCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_StreamCallRequest(buffer_arg) {
  return deviced_stream_call_pb.StreamCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_StreamCallResponse(arg) {
  if (!(arg instanceof deviced_stream_call_pb.StreamCallResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.StreamCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_StreamCallResponse(buffer_arg) {
  return deviced_stream_call_pb.StreamCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_UnaryCallRequest(arg) {
  if (!(arg instanceof deviced_unary_call_pb.UnaryCallRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.UnaryCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_UnaryCallRequest(buffer_arg) {
  return deviced_unary_call_pb.UnaryCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_deviced_UnaryCallResponse(arg) {
  if (!(arg instanceof deviced_unary_call_pb.UnaryCallResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.deviced.UnaryCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_deviced_UnaryCallResponse(buffer_arg) {
  return deviced_unary_call_pb.UnaryCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var DevicedServiceService = exports.DevicedServiceService = {
  createDevice: {
    path: '/ai.metathings.service.deviced.DevicedService/CreateDevice',
    requestStream: false,
    responseStream: false,
    requestType: deviced_create_device_pb.CreateDeviceRequest,
    responseType: deviced_create_device_pb.CreateDeviceResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_CreateDeviceRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_CreateDeviceRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_CreateDeviceResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_CreateDeviceResponse,
  },
  deleteDevice: {
    path: '/ai.metathings.service.deviced.DevicedService/DeleteDevice',
    requestStream: false,
    responseStream: false,
    requestType: deviced_delete_device_pb.DeleteDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_deviced_DeleteDeviceRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_DeleteDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  patchDevice: {
    path: '/ai.metathings.service.deviced.DevicedService/PatchDevice',
    requestStream: false,
    responseStream: false,
    requestType: deviced_patch_device_pb.PatchDeviceRequest,
    responseType: deviced_patch_device_pb.PatchDeviceResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_PatchDeviceRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_PatchDeviceRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_PatchDeviceResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_PatchDeviceResponse,
  },
  getDevice: {
    path: '/ai.metathings.service.deviced.DevicedService/GetDevice',
    requestStream: false,
    responseStream: false,
    requestType: deviced_get_device_pb.GetDeviceRequest,
    responseType: deviced_get_device_pb.GetDeviceResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_GetDeviceRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_GetDeviceRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_GetDeviceResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_GetDeviceResponse,
  },
  listDevices: {
    path: '/ai.metathings.service.deviced.DevicedService/ListDevices',
    requestStream: false,
    responseStream: false,
    requestType: deviced_list_devices_pb.ListDevicesRequest,
    responseType: deviced_list_devices_pb.ListDevicesResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_ListDevicesRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_ListDevicesRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_ListDevicesResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_ListDevicesResponse,
  },
  getDeviceByModule: {
    path: '/ai.metathings.service.deviced.DevicedService/GetDeviceByModule',
    requestStream: false,
    responseStream: false,
    requestType: deviced_get_device_by_module_pb.GetDeviceByModuleRequest,
    responseType: deviced_get_device_by_module_pb.GetDeviceByModuleResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_GetDeviceByModuleRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_GetDeviceByModuleRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_GetDeviceByModuleResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_GetDeviceByModuleResponse,
  },
  // Calling
  unaryCall: {
    path: '/ai.metathings.service.deviced.DevicedService/UnaryCall',
    requestStream: false,
    responseStream: false,
    requestType: deviced_unary_call_pb.UnaryCallRequest,
    responseType: deviced_unary_call_pb.UnaryCallResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_UnaryCallRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_UnaryCallRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_UnaryCallResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_UnaryCallResponse,
  },
  streamCall: {
    path: '/ai.metathings.service.deviced.DevicedService/StreamCall',
    requestStream: true,
    responseStream: true,
    requestType: deviced_stream_call_pb.StreamCallRequest,
    responseType: deviced_stream_call_pb.StreamCallResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_StreamCallRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_StreamCallRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_StreamCallResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_StreamCallResponse,
  },
  // Flow
  pullFrameFromFlow: {
    path: '/ai.metathings.service.deviced.DevicedService/PullFrameFromFlow',
    requestStream: false,
    responseStream: true,
    requestType: deviced_pull_frame_from_flow_pb.PullFrameFromFlowRequest,
    responseType: deviced_pull_frame_from_flow_pb.PullFrameFromFlowResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_PullFrameFromFlowRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_PullFrameFromFlowRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_PullFrameFromFlowResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_PullFrameFromFlowResponse,
  },
  pushFrameToFlow: {
    path: '/ai.metathings.service.deviced.DevicedService/PushFrameToFlow',
    requestStream: true,
    responseStream: true,
    requestType: deviced_push_frame_to_flow_pb.PushFrameToFlowRequest,
    responseType: deviced_push_frame_to_flow_pb.PushFrameToFlowResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_PushFrameToFlowRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_PushFrameToFlowRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_PushFrameToFlowResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_PushFrameToFlowResponse,
  },
  queryFramesFromFlow: {
    path: '/ai.metathings.service.deviced.DevicedService/QueryFramesFromFlow',
    requestStream: false,
    responseStream: false,
    requestType: deviced_query_frames_from_flow_pb.QueryFramesFromFlowRequest,
    responseType: deviced_query_frames_from_flow_pb.QueryFramesFromFlowResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_QueryFramesFromFlowRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_QueryFramesFromFlowRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_QueryFramesFromFlowResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_QueryFramesFromFlowResponse,
  },
  // Simple Storage
  putObject: {
    path: '/ai.metathings.service.deviced.DevicedService/PutObject',
    requestStream: false,
    responseStream: false,
    requestType: deviced_put_object_pb.PutObjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_deviced_PutObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_PutObjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  removeObject: {
    path: '/ai.metathings.service.deviced.DevicedService/RemoveObject',
    requestStream: false,
    responseStream: false,
    requestType: deviced_remove_object_pb.RemoveObjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_deviced_RemoveObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_RemoveObjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  renameObject: {
    path: '/ai.metathings.service.deviced.DevicedService/RenameObject',
    requestStream: false,
    responseStream: false,
    requestType: deviced_rename_object_pb.RenameObjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_deviced_RenameObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_RenameObjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getObject: {
    path: '/ai.metathings.service.deviced.DevicedService/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: deviced_get_object_pb.GetObjectRequest,
    responseType: deviced_get_object_pb.GetObjectResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_GetObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_GetObjectRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_GetObjectResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_GetObjectResponse,
  },
  getObjectContent: {
    path: '/ai.metathings.service.deviced.DevicedService/GetObjectContent',
    requestStream: false,
    responseStream: false,
    requestType: deviced_get_object_content_pb.GetObjectContentRequest,
    responseType: deviced_get_object_content_pb.GetObjectContentResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_GetObjectContentRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_GetObjectContentRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_GetObjectContentResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_GetObjectContentResponse,
  },
  getObjectStreamingContent: {
    path: '/ai.metathings.service.deviced.DevicedService/GetObjectStreamingContent',
    requestStream: false,
    responseStream: true,
    requestType: deviced_get_object_streaming_content_pb.GetObjectStreamingContentRequest,
    responseType: deviced_get_object_streaming_content_pb.GetObjectStreamingContentResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_GetObjectStreamingContentRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_GetObjectStreamingContentRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_GetObjectStreamingContentResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_GetObjectStreamingContentResponse,
  },
  listObjects: {
    path: '/ai.metathings.service.deviced.DevicedService/ListObjects',
    requestStream: false,
    responseStream: false,
    requestType: deviced_list_objects_pb.ListObjectsRequest,
    responseType: deviced_list_objects_pb.ListObjectsResponse,
    requestSerialize: serialize_ai_metathings_service_deviced_ListObjectsRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_ListObjectsRequest,
    responseSerialize: serialize_ai_metathings_service_deviced_ListObjectsResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_ListObjectsResponse,
  },
  // internal device only
  showDevice: {
    path: '/ai.metathings.service.deviced.DevicedService/ShowDevice',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: deviced_show_device_pb.ShowDeviceResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ai_metathings_service_deviced_ShowDeviceResponse,
    responseDeserialize: deserialize_ai_metathings_service_deviced_ShowDeviceResponse,
  },
  connect: {
    path: '/ai.metathings.service.deviced.DevicedService/Connect',
    requestStream: true,
    responseStream: true,
    requestType: deviced_connect_pb.ConnectResponse,
    responseType: deviced_connect_pb.ConnectRequest,
    requestSerialize: serialize_ai_metathings_service_deviced_ConnectResponse,
    requestDeserialize: deserialize_ai_metathings_service_deviced_ConnectResponse,
    responseSerialize: serialize_ai_metathings_service_deviced_ConnectRequest,
    responseDeserialize: deserialize_ai_metathings_service_deviced_ConnectRequest,
  },
  heartbeat: {
    path: '/ai.metathings.service.deviced.DevicedService/Heartbeat',
    requestStream: false,
    responseStream: false,
    requestType: deviced_heartbeat_pb.HeartbeatRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_deviced_HeartbeatRequest,
    requestDeserialize: deserialize_ai_metathings_service_deviced_HeartbeatRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DevicedServiceClient = grpc.makeGenericClientConstructor(DevicedServiceService);
