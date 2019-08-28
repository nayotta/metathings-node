// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var policyd_service_pb = require('../policyd/service_pb.js');

function serialize_ai_metathings_service_policyd_Array2DReply(arg) {
  if (!(arg instanceof policyd_service_pb.Array2DReply)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.Array2DReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_Array2DReply(buffer_arg) {
  return policyd_service_pb.Array2DReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_ArrayReply(arg) {
  if (!(arg instanceof policyd_service_pb.ArrayReply)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.ArrayReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_ArrayReply(buffer_arg) {
  return policyd_service_pb.ArrayReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_BoolReply(arg) {
  if (!(arg instanceof policyd_service_pb.BoolReply)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.BoolReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_BoolReply(buffer_arg) {
  return policyd_service_pb.BoolReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_EmptyReply(arg) {
  if (!(arg instanceof policyd_service_pb.EmptyReply)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.EmptyReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_EmptyReply(buffer_arg) {
  return policyd_service_pb.EmptyReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_EmptyRequest(arg) {
  if (!(arg instanceof policyd_service_pb.EmptyRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_EmptyRequest(buffer_arg) {
  return policyd_service_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_EnforceBucketRequest(arg) {
  if (!(arg instanceof policyd_service_pb.EnforceBucketRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.EnforceBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_EnforceBucketRequest(buffer_arg) {
  return policyd_service_pb.EnforceBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_EnforceRequest(arg) {
  if (!(arg instanceof policyd_service_pb.EnforceRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.EnforceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_EnforceRequest(buffer_arg) {
  return policyd_service_pb.EnforceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_FilteredPolicyRequest(arg) {
  if (!(arg instanceof policyd_service_pb.FilteredPolicyRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.FilteredPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_FilteredPolicyRequest(buffer_arg) {
  return policyd_service_pb.FilteredPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_NewAdapterReply(arg) {
  if (!(arg instanceof policyd_service_pb.NewAdapterReply)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.NewAdapterReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_NewAdapterReply(buffer_arg) {
  return policyd_service_pb.NewAdapterReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_NewAdapterRequest(arg) {
  if (!(arg instanceof policyd_service_pb.NewAdapterRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.NewAdapterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_NewAdapterRequest(buffer_arg) {
  return policyd_service_pb.NewAdapterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_NewEnforcerReply(arg) {
  if (!(arg instanceof policyd_service_pb.NewEnforcerReply)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.NewEnforcerReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_NewEnforcerReply(buffer_arg) {
  return policyd_service_pb.NewEnforcerReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_NewEnforcerRequest(arg) {
  if (!(arg instanceof policyd_service_pb.NewEnforcerRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.NewEnforcerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_NewEnforcerRequest(buffer_arg) {
  return policyd_service_pb.NewEnforcerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_PolicyRequest(arg) {
  if (!(arg instanceof policyd_service_pb.PolicyRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.PolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_PolicyRequest(buffer_arg) {
  return policyd_service_pb.PolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_policyd_SimpleGetRequest(arg) {
  if (!(arg instanceof policyd_service_pb.SimpleGetRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.policyd.SimpleGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_policyd_SimpleGetRequest(buffer_arg) {
  return policyd_service_pb.SimpleGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PolicydServiceService = exports.PolicydServiceService = {
  newEnforcer: {
    path: '/ai.metathings.service.policyd.PolicydService/NewEnforcer',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.NewEnforcerRequest,
    responseType: policyd_service_pb.NewEnforcerReply,
    requestSerialize: serialize_ai_metathings_service_policyd_NewEnforcerRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_NewEnforcerRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_NewEnforcerReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_NewEnforcerReply,
  },
  newAdapter: {
    path: '/ai.metathings.service.policyd.PolicydService/NewAdapter',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.NewAdapterRequest,
    responseType: policyd_service_pb.NewAdapterReply,
    requestSerialize: serialize_ai_metathings_service_policyd_NewAdapterRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_NewAdapterRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_NewAdapterReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_NewAdapterReply,
  },
  enforce: {
    path: '/ai.metathings.service.policyd.PolicydService/Enforce',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EnforceRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EnforceRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EnforceRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  enforceBucket: {
    path: '/ai.metathings.service.policyd.PolicydService/EnforceBucket',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EnforceBucketRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EnforceBucketRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EnforceBucketRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  loadPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/LoadPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.EmptyReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_EmptyReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_EmptyReply,
  },
  savePolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/SavePolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.EmptyReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_EmptyReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_EmptyReply,
  },
  addPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/AddPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  addNamedPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/AddNamedPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removePolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemovePolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removeNamedPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemoveNamedPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removeFilteredPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemoveFilteredPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removeFilteredNamedPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemoveFilteredNamedPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  getPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  getNamedPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetNamedPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  getFilteredPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetFilteredPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  getFilteredNamedPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetFilteredNamedPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  addGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/AddGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  addNamedGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/AddNamedGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removeGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemoveGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removeNamedGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemoveNamedGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removeFilteredGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemoveFilteredGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removeFilteredNamedGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemoveFilteredNamedGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  getGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  getNamedGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetNamedGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  getFilteredGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetFilteredGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  getFilteredNamedGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/GetFilteredNamedGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.FilteredPolicyRequest,
    responseType: policyd_service_pb.Array2DReply,
    requestSerialize: serialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_FilteredPolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_Array2DReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_Array2DReply,
  },
  getAllSubjects: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllSubjects',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  getAllNamedSubjects: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllNamedSubjects',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.SimpleGetRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_SimpleGetRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_SimpleGetRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  getAllObjects: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllObjects',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  getAllNamedObjects: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllNamedObjects',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.SimpleGetRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_SimpleGetRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_SimpleGetRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  getAllActions: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllActions',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  getAllNamedActions: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllNamedActions',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.SimpleGetRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_SimpleGetRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_SimpleGetRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  getAllRoles: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllRoles',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  getAllNamedRoles: {
    path: '/ai.metathings.service.policyd.PolicydService/GetAllNamedRoles',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.SimpleGetRequest,
    responseType: policyd_service_pb.ArrayReply,
    requestSerialize: serialize_ai_metathings_service_policyd_SimpleGetRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_SimpleGetRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_ArrayReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_ArrayReply,
  },
  hasPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/HasPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  hasNamedPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/HasNamedPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  hasGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/HasGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  hasNamedGroupingPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/HasNamedGroupingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  addPresetPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/AddPresetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  removePresetPolicy: {
    path: '/ai.metathings.service.policyd.PolicydService/RemovePresetPolicy',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.PolicyRequest,
    responseType: policyd_service_pb.BoolReply,
    requestSerialize: serialize_ai_metathings_service_policyd_PolicyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_PolicyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_BoolReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_BoolReply,
  },
  initialize: {
    path: '/ai.metathings.service.policyd.PolicydService/Initialize',
    requestStream: false,
    responseStream: false,
    requestType: policyd_service_pb.EmptyRequest,
    responseType: policyd_service_pb.EmptyReply,
    requestSerialize: serialize_ai_metathings_service_policyd_EmptyRequest,
    requestDeserialize: deserialize_ai_metathings_service_policyd_EmptyRequest,
    responseSerialize: serialize_ai_metathings_service_policyd_EmptyReply,
    responseDeserialize: deserialize_ai_metathings_service_policyd_EmptyReply,
  },
};

exports.PolicydServiceClient = grpc.makeGenericClientConstructor(PolicydServiceService);
