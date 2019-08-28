// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var identityd2_create_domain_pb = require('../identityd2/create_domain_pb.js');
var identityd2_delete_domain_pb = require('../identityd2/delete_domain_pb.js');
var identityd2_patch_domain_pb = require('../identityd2/patch_domain_pb.js');
var identityd2_get_domain_pb = require('../identityd2/get_domain_pb.js');
var identityd2_list_domains_pb = require('../identityd2/list_domains_pb.js');
var identityd2_create_action_pb = require('../identityd2/create_action_pb.js');
var identityd2_delete_action_pb = require('../identityd2/delete_action_pb.js');
var identityd2_patch_action_pb = require('../identityd2/patch_action_pb.js');
var identityd2_get_action_pb = require('../identityd2/get_action_pb.js');
var identityd2_list_actions_pb = require('../identityd2/list_actions_pb.js');
var identityd2_create_role_pb = require('../identityd2/create_role_pb.js');
var identityd2_delete_role_pb = require('../identityd2/delete_role_pb.js');
var identityd2_patch_role_pb = require('../identityd2/patch_role_pb.js');
var identityd2_get_role_pb = require('../identityd2/get_role_pb.js');
var identityd2_list_roles_pb = require('../identityd2/list_roles_pb.js');
var identityd2_list_roles_for_entity_pb = require('../identityd2/list_roles_for_entity_pb.js');
var identityd2_add_action_to_role_pb = require('../identityd2/add_action_to_role_pb.js');
var identityd2_remove_action_from_role_pb = require('../identityd2/remove_action_from_role_pb.js');
var identityd2_create_entity_pb = require('../identityd2/create_entity_pb.js');
var identityd2_delete_entity_pb = require('../identityd2/delete_entity_pb.js');
var identityd2_patch_entity_pb = require('../identityd2/patch_entity_pb.js');
var identityd2_get_entity_pb = require('../identityd2/get_entity_pb.js');
var identityd2_list_entities_pb = require('../identityd2/list_entities_pb.js');
var identityd2_show_entity_pb = require('../identityd2/show_entity_pb.js');
var identityd2_add_role_to_entity_pb = require('../identityd2/add_role_to_entity_pb.js');
var identityd2_remove_role_from_entity_pb = require('../identityd2/remove_role_from_entity_pb.js');
var identityd2_add_entity_to_domain_pb = require('../identityd2/add_entity_to_domain_pb.js');
var identityd2_remove_entity_from_domain_pb = require('../identityd2/remove_entity_from_domain_pb.js');
var identityd2_create_group_pb = require('../identityd2/create_group_pb.js');
var identityd2_delete_group_pb = require('../identityd2/delete_group_pb.js');
var identityd2_patch_group_pb = require('../identityd2/patch_group_pb.js');
var identityd2_get_group_pb = require('../identityd2/get_group_pb.js');
var identityd2_list_groups_pb = require('../identityd2/list_groups_pb.js');
var identityd2_list_groups_for_subject_pb = require('../identityd2/list_groups_for_subject_pb.js');
var identityd2_list_groups_for_object_pb = require('../identityd2/list_groups_for_object_pb.js');
var identityd2_show_groups_pb = require('../identityd2/show_groups_pb.js');
var identityd2_add_role_to_group_pb = require('../identityd2/add_role_to_group_pb.js');
var identityd2_remove_role_from_group_pb = require('../identityd2/remove_role_from_group_pb.js');
var identityd2_add_subject_to_group_pb = require('../identityd2/add_subject_to_group_pb.js');
var identityd2_remove_subject_from_group_pb = require('../identityd2/remove_subject_from_group_pb.js');
var identityd2_add_object_to_group_pb = require('../identityd2/add_object_to_group_pb.js');
var identityd2_remove_object_from_group_pb = require('../identityd2/remove_object_from_group_pb.js');
var identityd2_create_credential_pb = require('../identityd2/create_credential_pb.js');
var identityd2_delete_credential_pb = require('../identityd2/delete_credential_pb.js');
var identityd2_patch_credential_pb = require('../identityd2/patch_credential_pb.js');
var identityd2_get_credential_pb = require('../identityd2/get_credential_pb.js');
var identityd2_list_credentials_pb = require('../identityd2/list_credentials_pb.js');
var identityd2_list_credentials_for_entity_pb = require('../identityd2/list_credentials_for_entity_pb.js');
var identityd2_issue_token_by_credential_pb = require('../identityd2/issue_token_by_credential_pb.js');
var identityd2_issue_token_by_password_pb = require('../identityd2/issue_token_by_password_pb.js');
var identityd2_issue_token_by_token_pb = require('../identityd2/issue_token_by_token_pb.js');
var identityd2_revoke_token_pb = require('../identityd2/revoke_token_pb.js');
var identityd2_validate_token_pb = require('../identityd2/validate_token_pb.js');
var identityd2_check_token_pb = require('../identityd2/check_token_pb.js');
var identityd2_authorize_token_pb = require('../identityd2/authorize_token_pb.js');

function serialize_ai_metathings_service_identityd2_AddActionToRoleRequest(arg) {
  if (!(arg instanceof identityd2_add_action_to_role_pb.AddActionToRoleRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.AddActionToRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_AddActionToRoleRequest(buffer_arg) {
  return identityd2_add_action_to_role_pb.AddActionToRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_AddEntityToDomainRequest(arg) {
  if (!(arg instanceof identityd2_add_entity_to_domain_pb.AddEntityToDomainRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.AddEntityToDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_AddEntityToDomainRequest(buffer_arg) {
  return identityd2_add_entity_to_domain_pb.AddEntityToDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_AddObjectToGroupRequest(arg) {
  if (!(arg instanceof identityd2_add_object_to_group_pb.AddObjectToGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.AddObjectToGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_AddObjectToGroupRequest(buffer_arg) {
  return identityd2_add_object_to_group_pb.AddObjectToGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_AddRoleToEntityRequest(arg) {
  if (!(arg instanceof identityd2_add_role_to_entity_pb.AddRoleToEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.AddRoleToEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_AddRoleToEntityRequest(buffer_arg) {
  return identityd2_add_role_to_entity_pb.AddRoleToEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_AddRoleToGroupRequest(arg) {
  if (!(arg instanceof identityd2_add_role_to_group_pb.AddRoleToGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.AddRoleToGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_AddRoleToGroupRequest(buffer_arg) {
  return identityd2_add_role_to_group_pb.AddRoleToGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_AddSubjectToGroupRequest(arg) {
  if (!(arg instanceof identityd2_add_subject_to_group_pb.AddSubjectToGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.AddSubjectToGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_AddSubjectToGroupRequest(buffer_arg) {
  return identityd2_add_subject_to_group_pb.AddSubjectToGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_AuthorizeTokenRequest(arg) {
  if (!(arg instanceof identityd2_authorize_token_pb.AuthorizeTokenRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.AuthorizeTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_AuthorizeTokenRequest(buffer_arg) {
  return identityd2_authorize_token_pb.AuthorizeTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CheckTokenRequest(arg) {
  if (!(arg instanceof identityd2_check_token_pb.CheckTokenRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CheckTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CheckTokenRequest(buffer_arg) {
  return identityd2_check_token_pb.CheckTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateActionRequest(arg) {
  if (!(arg instanceof identityd2_create_action_pb.CreateActionRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateActionRequest(buffer_arg) {
  return identityd2_create_action_pb.CreateActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateActionResponse(arg) {
  if (!(arg instanceof identityd2_create_action_pb.CreateActionResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateActionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateActionResponse(buffer_arg) {
  return identityd2_create_action_pb.CreateActionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateCredentialRequest(arg) {
  if (!(arg instanceof identityd2_create_credential_pb.CreateCredentialRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateCredentialRequest(buffer_arg) {
  return identityd2_create_credential_pb.CreateCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateCredentialResponse(arg) {
  if (!(arg instanceof identityd2_create_credential_pb.CreateCredentialResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateCredentialResponse(buffer_arg) {
  return identityd2_create_credential_pb.CreateCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateDomainRequest(arg) {
  if (!(arg instanceof identityd2_create_domain_pb.CreateDomainRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateDomainRequest(buffer_arg) {
  return identityd2_create_domain_pb.CreateDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateDomainResponse(arg) {
  if (!(arg instanceof identityd2_create_domain_pb.CreateDomainResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateDomainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateDomainResponse(buffer_arg) {
  return identityd2_create_domain_pb.CreateDomainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateEntityRequest(arg) {
  if (!(arg instanceof identityd2_create_entity_pb.CreateEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateEntityRequest(buffer_arg) {
  return identityd2_create_entity_pb.CreateEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateEntityResponse(arg) {
  if (!(arg instanceof identityd2_create_entity_pb.CreateEntityResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateEntityResponse(buffer_arg) {
  return identityd2_create_entity_pb.CreateEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateGroupRequest(arg) {
  if (!(arg instanceof identityd2_create_group_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateGroupRequest(buffer_arg) {
  return identityd2_create_group_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateGroupResponse(arg) {
  if (!(arg instanceof identityd2_create_group_pb.CreateGroupResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateGroupResponse(buffer_arg) {
  return identityd2_create_group_pb.CreateGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateRoleRequest(arg) {
  if (!(arg instanceof identityd2_create_role_pb.CreateRoleRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateRoleRequest(buffer_arg) {
  return identityd2_create_role_pb.CreateRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_CreateRoleResponse(arg) {
  if (!(arg instanceof identityd2_create_role_pb.CreateRoleResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.CreateRoleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_CreateRoleResponse(buffer_arg) {
  return identityd2_create_role_pb.CreateRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_DeleteActionRequest(arg) {
  if (!(arg instanceof identityd2_delete_action_pb.DeleteActionRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.DeleteActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_DeleteActionRequest(buffer_arg) {
  return identityd2_delete_action_pb.DeleteActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_DeleteCredentialRequest(arg) {
  if (!(arg instanceof identityd2_delete_credential_pb.DeleteCredentialRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.DeleteCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_DeleteCredentialRequest(buffer_arg) {
  return identityd2_delete_credential_pb.DeleteCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_DeleteDomainRequest(arg) {
  if (!(arg instanceof identityd2_delete_domain_pb.DeleteDomainRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.DeleteDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_DeleteDomainRequest(buffer_arg) {
  return identityd2_delete_domain_pb.DeleteDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_DeleteEntityRequest(arg) {
  if (!(arg instanceof identityd2_delete_entity_pb.DeleteEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.DeleteEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_DeleteEntityRequest(buffer_arg) {
  return identityd2_delete_entity_pb.DeleteEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_DeleteGroupRequest(arg) {
  if (!(arg instanceof identityd2_delete_group_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.DeleteGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_DeleteGroupRequest(buffer_arg) {
  return identityd2_delete_group_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_DeleteRoleRequest(arg) {
  if (!(arg instanceof identityd2_delete_role_pb.DeleteRoleRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.DeleteRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_DeleteRoleRequest(buffer_arg) {
  return identityd2_delete_role_pb.DeleteRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetActionRequest(arg) {
  if (!(arg instanceof identityd2_get_action_pb.GetActionRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetActionRequest(buffer_arg) {
  return identityd2_get_action_pb.GetActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetActionResponse(arg) {
  if (!(arg instanceof identityd2_get_action_pb.GetActionResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetActionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetActionResponse(buffer_arg) {
  return identityd2_get_action_pb.GetActionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetCredentialRequest(arg) {
  if (!(arg instanceof identityd2_get_credential_pb.GetCredentialRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetCredentialRequest(buffer_arg) {
  return identityd2_get_credential_pb.GetCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetCredentialResponse(arg) {
  if (!(arg instanceof identityd2_get_credential_pb.GetCredentialResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetCredentialResponse(buffer_arg) {
  return identityd2_get_credential_pb.GetCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetDomainRequest(arg) {
  if (!(arg instanceof identityd2_get_domain_pb.GetDomainRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetDomainRequest(buffer_arg) {
  return identityd2_get_domain_pb.GetDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetDomainResponse(arg) {
  if (!(arg instanceof identityd2_get_domain_pb.GetDomainResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetDomainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetDomainResponse(buffer_arg) {
  return identityd2_get_domain_pb.GetDomainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetEntityRequest(arg) {
  if (!(arg instanceof identityd2_get_entity_pb.GetEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetEntityRequest(buffer_arg) {
  return identityd2_get_entity_pb.GetEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetEntityResponse(arg) {
  if (!(arg instanceof identityd2_get_entity_pb.GetEntityResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetEntityResponse(buffer_arg) {
  return identityd2_get_entity_pb.GetEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetGroupRequest(arg) {
  if (!(arg instanceof identityd2_get_group_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetGroupRequest(buffer_arg) {
  return identityd2_get_group_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetGroupResponse(arg) {
  if (!(arg instanceof identityd2_get_group_pb.GetGroupResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetGroupResponse(buffer_arg) {
  return identityd2_get_group_pb.GetGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetRoleRequest(arg) {
  if (!(arg instanceof identityd2_get_role_pb.GetRoleRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetRoleRequest(buffer_arg) {
  return identityd2_get_role_pb.GetRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_GetRoleResponse(arg) {
  if (!(arg instanceof identityd2_get_role_pb.GetRoleResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.GetRoleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_GetRoleResponse(buffer_arg) {
  return identityd2_get_role_pb.GetRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_IssueTokenByCredentialRequest(arg) {
  if (!(arg instanceof identityd2_issue_token_by_credential_pb.IssueTokenByCredentialRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.IssueTokenByCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_IssueTokenByCredentialRequest(buffer_arg) {
  return identityd2_issue_token_by_credential_pb.IssueTokenByCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_IssueTokenByCredentialResponse(arg) {
  if (!(arg instanceof identityd2_issue_token_by_credential_pb.IssueTokenByCredentialResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.IssueTokenByCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_IssueTokenByCredentialResponse(buffer_arg) {
  return identityd2_issue_token_by_credential_pb.IssueTokenByCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_IssueTokenByPasswordRequest(arg) {
  if (!(arg instanceof identityd2_issue_token_by_password_pb.IssueTokenByPasswordRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.IssueTokenByPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_IssueTokenByPasswordRequest(buffer_arg) {
  return identityd2_issue_token_by_password_pb.IssueTokenByPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_IssueTokenByPasswordResponse(arg) {
  if (!(arg instanceof identityd2_issue_token_by_password_pb.IssueTokenByPasswordResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.IssueTokenByPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_IssueTokenByPasswordResponse(buffer_arg) {
  return identityd2_issue_token_by_password_pb.IssueTokenByPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_IssueTokenByTokenRequest(arg) {
  if (!(arg instanceof identityd2_issue_token_by_token_pb.IssueTokenByTokenRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.IssueTokenByTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_IssueTokenByTokenRequest(buffer_arg) {
  return identityd2_issue_token_by_token_pb.IssueTokenByTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_IssueTokenByTokenResponse(arg) {
  if (!(arg instanceof identityd2_issue_token_by_token_pb.IssueTokenByTokenResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.IssueTokenByTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_IssueTokenByTokenResponse(buffer_arg) {
  return identityd2_issue_token_by_token_pb.IssueTokenByTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListActionsRequest(arg) {
  if (!(arg instanceof identityd2_list_actions_pb.ListActionsRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListActionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListActionsRequest(buffer_arg) {
  return identityd2_list_actions_pb.ListActionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListActionsResponse(arg) {
  if (!(arg instanceof identityd2_list_actions_pb.ListActionsResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListActionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListActionsResponse(buffer_arg) {
  return identityd2_list_actions_pb.ListActionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListCredentialsForEntityRequest(arg) {
  if (!(arg instanceof identityd2_list_credentials_for_entity_pb.ListCredentialsForEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListCredentialsForEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListCredentialsForEntityRequest(buffer_arg) {
  return identityd2_list_credentials_for_entity_pb.ListCredentialsForEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListCredentialsForEntityResponse(arg) {
  if (!(arg instanceof identityd2_list_credentials_for_entity_pb.ListCredentialsForEntityResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListCredentialsForEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListCredentialsForEntityResponse(buffer_arg) {
  return identityd2_list_credentials_for_entity_pb.ListCredentialsForEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListCredentialsRequest(arg) {
  if (!(arg instanceof identityd2_list_credentials_pb.ListCredentialsRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListCredentialsRequest(buffer_arg) {
  return identityd2_list_credentials_pb.ListCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListCredentialsResponse(arg) {
  if (!(arg instanceof identityd2_list_credentials_pb.ListCredentialsResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListCredentialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListCredentialsResponse(buffer_arg) {
  return identityd2_list_credentials_pb.ListCredentialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListDomainsRequest(arg) {
  if (!(arg instanceof identityd2_list_domains_pb.ListDomainsRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListDomainsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListDomainsRequest(buffer_arg) {
  return identityd2_list_domains_pb.ListDomainsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListDomainsResponse(arg) {
  if (!(arg instanceof identityd2_list_domains_pb.ListDomainsResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListDomainsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListDomainsResponse(buffer_arg) {
  return identityd2_list_domains_pb.ListDomainsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListEntitiesRequest(arg) {
  if (!(arg instanceof identityd2_list_entities_pb.ListEntitiesRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListEntitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListEntitiesRequest(buffer_arg) {
  return identityd2_list_entities_pb.ListEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListEntitiesResponse(arg) {
  if (!(arg instanceof identityd2_list_entities_pb.ListEntitiesResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListEntitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListEntitiesResponse(buffer_arg) {
  return identityd2_list_entities_pb.ListEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListGroupsForObjectRequest(arg) {
  if (!(arg instanceof identityd2_list_groups_for_object_pb.ListGroupsForObjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListGroupsForObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListGroupsForObjectRequest(buffer_arg) {
  return identityd2_list_groups_for_object_pb.ListGroupsForObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListGroupsForObjectResponse(arg) {
  if (!(arg instanceof identityd2_list_groups_for_object_pb.ListGroupsForObjectResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListGroupsForObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListGroupsForObjectResponse(buffer_arg) {
  return identityd2_list_groups_for_object_pb.ListGroupsForObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListGroupsForSubjectRequest(arg) {
  if (!(arg instanceof identityd2_list_groups_for_subject_pb.ListGroupsForSubjectRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListGroupsForSubjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListGroupsForSubjectRequest(buffer_arg) {
  return identityd2_list_groups_for_subject_pb.ListGroupsForSubjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListGroupsForSubjectResponse(arg) {
  if (!(arg instanceof identityd2_list_groups_for_subject_pb.ListGroupsForSubjectResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListGroupsForSubjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListGroupsForSubjectResponse(buffer_arg) {
  return identityd2_list_groups_for_subject_pb.ListGroupsForSubjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListGroupsRequest(arg) {
  if (!(arg instanceof identityd2_list_groups_pb.ListGroupsRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListGroupsRequest(buffer_arg) {
  return identityd2_list_groups_pb.ListGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListGroupsResponse(arg) {
  if (!(arg instanceof identityd2_list_groups_pb.ListGroupsResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListGroupsResponse(buffer_arg) {
  return identityd2_list_groups_pb.ListGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListRolesForEntityRequest(arg) {
  if (!(arg instanceof identityd2_list_roles_for_entity_pb.ListRolesForEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListRolesForEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListRolesForEntityRequest(buffer_arg) {
  return identityd2_list_roles_for_entity_pb.ListRolesForEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListRolesForEntityResponse(arg) {
  if (!(arg instanceof identityd2_list_roles_for_entity_pb.ListRolesForEntityResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListRolesForEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListRolesForEntityResponse(buffer_arg) {
  return identityd2_list_roles_for_entity_pb.ListRolesForEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListRolesRequest(arg) {
  if (!(arg instanceof identityd2_list_roles_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListRolesRequest(buffer_arg) {
  return identityd2_list_roles_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ListRolesResponse(arg) {
  if (!(arg instanceof identityd2_list_roles_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ListRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ListRolesResponse(buffer_arg) {
  return identityd2_list_roles_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchActionRequest(arg) {
  if (!(arg instanceof identityd2_patch_action_pb.PatchActionRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchActionRequest(buffer_arg) {
  return identityd2_patch_action_pb.PatchActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchActionResponse(arg) {
  if (!(arg instanceof identityd2_patch_action_pb.PatchActionResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchActionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchActionResponse(buffer_arg) {
  return identityd2_patch_action_pb.PatchActionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchCredentialRequest(arg) {
  if (!(arg instanceof identityd2_patch_credential_pb.PatchCredentialRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchCredentialRequest(buffer_arg) {
  return identityd2_patch_credential_pb.PatchCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchCredentialResponse(arg) {
  if (!(arg instanceof identityd2_patch_credential_pb.PatchCredentialResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchCredentialResponse(buffer_arg) {
  return identityd2_patch_credential_pb.PatchCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchDomainRequest(arg) {
  if (!(arg instanceof identityd2_patch_domain_pb.PatchDomainRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchDomainRequest(buffer_arg) {
  return identityd2_patch_domain_pb.PatchDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchDomainResponse(arg) {
  if (!(arg instanceof identityd2_patch_domain_pb.PatchDomainResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchDomainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchDomainResponse(buffer_arg) {
  return identityd2_patch_domain_pb.PatchDomainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchEntityRequest(arg) {
  if (!(arg instanceof identityd2_patch_entity_pb.PatchEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchEntityRequest(buffer_arg) {
  return identityd2_patch_entity_pb.PatchEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchEntityResponse(arg) {
  if (!(arg instanceof identityd2_patch_entity_pb.PatchEntityResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchEntityResponse(buffer_arg) {
  return identityd2_patch_entity_pb.PatchEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchGroupRequest(arg) {
  if (!(arg instanceof identityd2_patch_group_pb.PatchGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchGroupRequest(buffer_arg) {
  return identityd2_patch_group_pb.PatchGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchGroupResponse(arg) {
  if (!(arg instanceof identityd2_patch_group_pb.PatchGroupResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchGroupResponse(buffer_arg) {
  return identityd2_patch_group_pb.PatchGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchRoleRequest(arg) {
  if (!(arg instanceof identityd2_patch_role_pb.PatchRoleRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchRoleRequest(buffer_arg) {
  return identityd2_patch_role_pb.PatchRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_PatchRoleResponse(arg) {
  if (!(arg instanceof identityd2_patch_role_pb.PatchRoleResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.PatchRoleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_PatchRoleResponse(buffer_arg) {
  return identityd2_patch_role_pb.PatchRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_RemoveActionFromRoleRequest(arg) {
  if (!(arg instanceof identityd2_remove_action_from_role_pb.RemoveActionFromRoleRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.RemoveActionFromRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_RemoveActionFromRoleRequest(buffer_arg) {
  return identityd2_remove_action_from_role_pb.RemoveActionFromRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_RemoveEntityFromDomainRequest(arg) {
  if (!(arg instanceof identityd2_remove_entity_from_domain_pb.RemoveEntityFromDomainRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.RemoveEntityFromDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_RemoveEntityFromDomainRequest(buffer_arg) {
  return identityd2_remove_entity_from_domain_pb.RemoveEntityFromDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_RemoveObjectFromGroupRequest(arg) {
  if (!(arg instanceof identityd2_remove_object_from_group_pb.RemoveObjectFromGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.RemoveObjectFromGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_RemoveObjectFromGroupRequest(buffer_arg) {
  return identityd2_remove_object_from_group_pb.RemoveObjectFromGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_RemoveRoleFromEntityRequest(arg) {
  if (!(arg instanceof identityd2_remove_role_from_entity_pb.RemoveRoleFromEntityRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.RemoveRoleFromEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_RemoveRoleFromEntityRequest(buffer_arg) {
  return identityd2_remove_role_from_entity_pb.RemoveRoleFromEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_RemoveRoleFromGroupRequest(arg) {
  if (!(arg instanceof identityd2_remove_role_from_group_pb.RemoveRoleFromGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.RemoveRoleFromGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_RemoveRoleFromGroupRequest(buffer_arg) {
  return identityd2_remove_role_from_group_pb.RemoveRoleFromGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_RemoveSubjectFromGroupRequest(arg) {
  if (!(arg instanceof identityd2_remove_subject_from_group_pb.RemoveSubjectFromGroupRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.RemoveSubjectFromGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_RemoveSubjectFromGroupRequest(buffer_arg) {
  return identityd2_remove_subject_from_group_pb.RemoveSubjectFromGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_RevokeTokenRequest(arg) {
  if (!(arg instanceof identityd2_revoke_token_pb.RevokeTokenRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.RevokeTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_RevokeTokenRequest(buffer_arg) {
  return identityd2_revoke_token_pb.RevokeTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ShowEntityResponse(arg) {
  if (!(arg instanceof identityd2_show_entity_pb.ShowEntityResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ShowEntityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ShowEntityResponse(buffer_arg) {
  return identityd2_show_entity_pb.ShowEntityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ShowGroupsResponse(arg) {
  if (!(arg instanceof identityd2_show_groups_pb.ShowGroupsResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ShowGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ShowGroupsResponse(buffer_arg) {
  return identityd2_show_groups_pb.ShowGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ValidateTokenRequest(arg) {
  if (!(arg instanceof identityd2_validate_token_pb.ValidateTokenRequest)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ValidateTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ValidateTokenRequest(buffer_arg) {
  return identityd2_validate_token_pb.ValidateTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ai_metathings_service_identityd2_ValidateTokenResponse(arg) {
  if (!(arg instanceof identityd2_validate_token_pb.ValidateTokenResponse)) {
    throw new Error('Expected argument of type ai.metathings.service.identityd2.ValidateTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ai_metathings_service_identityd2_ValidateTokenResponse(buffer_arg) {
  return identityd2_validate_token_pb.ValidateTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var IdentitydServiceService = exports.IdentitydServiceService = {
  //
  // @fn CreateDomain
  // @arg domain.id <optional> "domain id"
  // @arg domain.parent.id "domain parent id"
  // @arg domain.name "domain name"
  // @arg domain.alias <optional> "domain alias"
  // @arg domain.extra <optional> "extra data, json string"
  // @ret domain
  // @req
  //   {
  //     "domain": {
  //       "name": "test",
  //       "parent": {
  //         "id": "default"
  //       }
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  createDomain: {
    path: '/ai.metathings.service.identityd2.IdentitydService/CreateDomain',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_create_domain_pb.CreateDomainRequest,
    responseType: identityd2_create_domain_pb.CreateDomainResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_CreateDomainRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_CreateDomainRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_CreateDomainResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_CreateDomainResponse,
  },
  //
  // @fn DeleteDomain
  // @arg domain.id "domain id"
  // @ret
  // @req
  //   {
  //     "domain": {
  //       "id": "domain-id"
  //     }
  //   }
  // @res
  //   { }
  // @err FailedPrecondition
  // @err Internal
  deleteDomain: {
    path: '/ai.metathings.service.identityd2.IdentitydService/DeleteDomain',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_delete_domain_pb.DeleteDomainRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_DeleteDomainRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_DeleteDomainRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn PatchDomain
  // @arg domain.id "domain id"
  // @arg domain.alias <optional> "domain alias"
  // @arg domain.extra <optional> "extra data, json string"
  // @ret domain
  // @req
  //   {
  //     "domain": {
  //       "id": "domain-id"
  //       "alias": "renamed-domain"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  patchDomain: {
    path: '/ai.metathings.service.identityd2.IdentitydService/PatchDomain',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_patch_domain_pb.PatchDomainRequest,
    responseType: identityd2_patch_domain_pb.PatchDomainResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_PatchDomainRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_PatchDomainRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_PatchDomainResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_PatchDomainResponse,
  },
  //
  // @fn GetDomain
  // @arg domain.id "domain id"
  // @ret domain
  // @req
  //   {
  //     "domain": {
  //       "id": "domain-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err InvalidArgument
  // @err Internal
  getDomain: {
    path: '/ai.metathings.service.identityd2.IdentitydService/GetDomain',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_get_domain_pb.GetDomainRequest,
    responseType: identityd2_get_domain_pb.GetDomainResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_GetDomainRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_GetDomainRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_GetDomainResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_GetDomainResponse,
  },
  //
  // @fn ListDomains
  // @arg domain.id <optional> "domain id"
  // @arg domain.name <optional> "domain name"
  // @arg domain.alias <optional> "domain alias"
  // @ret domains "list of domains"
  // @req
  //   { ... }
  // @res
  //   { ... }
  // @err Internal
  listDomains: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListDomains',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_domains_pb.ListDomainsRequest,
    responseType: identityd2_list_domains_pb.ListDomainsResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListDomainsRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListDomainsRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListDomainsResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListDomainsResponse,
  },
  //
  // @fn CreateAction
  // @arg action.id <optional> "action id"
  // @arg action.name "action name, format: <service>:<action>, example: identtiyd2:create_action"
  // @arg action.alias <optional> "action alias"
  // @arg action.description <optional> "action description"
  // @arg action.extra <optional> "extra data, json string"
  // @ret action
  // @req
  //   {
  //     "action": {
  //       "name": "identityd2:create_action"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  createAction: {
    path: '/ai.metathings.service.identityd2.IdentitydService/CreateAction',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_create_action_pb.CreateActionRequest,
    responseType: identityd2_create_action_pb.CreateActionResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_CreateActionRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_CreateActionRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_CreateActionResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_CreateActionResponse,
  },
  //
  // @fn DeleteAction
  // @arg action.id "action id"
  // @ret
  // @req
  //   {
  //     "action": {
  //       "id": "action-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  deleteAction: {
    path: '/ai.metathings.service.identityd2.IdentitydService/DeleteAction',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_delete_action_pb.DeleteActionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_DeleteActionRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_DeleteActionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn PatchAction
  // @arg action.id "action id"
  // @arg action.alias <optional> "action alias"
  // @arg action.description <optional> "action description"
  // @arg action.extra <optional> "extra data, json string"
  // @ret action
  // @req
  //   {
  //     "action": {
  //       "id": "action-id",
  //       "alias": "renamed-action-alias"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  patchAction: {
    path: '/ai.metathings.service.identityd2.IdentitydService/PatchAction',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_patch_action_pb.PatchActionRequest,
    responseType: identityd2_patch_action_pb.PatchActionResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_PatchActionRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_PatchActionRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_PatchActionResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_PatchActionResponse,
  },
  //
  // @fn GetAction
  // @arg action.id "action id"
  // @ret action
  // @req
  //   {
  //     "action": {
  //       "id": "action-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  getAction: {
    path: '/ai.metathings.service.identityd2.IdentitydService/GetAction',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_get_action_pb.GetActionRequest,
    responseType: identityd2_get_action_pb.GetActionResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_GetActionRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_GetActionRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_GetActionResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_GetActionResponse,
  },
  //
  // @fn ListActions
  // @unimplemented
  // @arg action.id <optional> "action id"
  // @arg action.name <optional> "action name"
  // @arg action.alias <optional> "action alias"
  // @ret actions "list of action"
  // @req
  //   { ... }
  // @res
  //   { ... }
  // @err Internal
  listActions: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListActions',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_actions_pb.ListActionsRequest,
    responseType: identityd2_list_actions_pb.ListActionsResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListActionsRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListActionsRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListActionsResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListActionsResponse,
  },
  //
  // @fn CreateRole
  // @arg role.id <optional> "role id"
  // @arg role.name "role name"
  // @arg role.alias <optional> "role alias"
  // @arg role.description <optional> "role description"
  // @arg role.extra <optional> "extra data, json string"
  // @ret role
  // @req
  //   {
  //     "role": {
  //       "name": "admin"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  createRole: {
    path: '/ai.metathings.service.identityd2.IdentitydService/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_create_role_pb.CreateRoleRequest,
    responseType: identityd2_create_role_pb.CreateRoleResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_CreateRoleRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_CreateRoleRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_CreateRoleResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_CreateRoleResponse,
  },
  //
  // @fn DeleteRole
  // @arg role.id "role id"
  // @ret
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  deleteRole: {
    path: '/ai.metathings.service.identityd2.IdentitydService/DeleteRole',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_delete_role_pb.DeleteRoleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_DeleteRoleRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_DeleteRoleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn PatchRole
  // @arg role.id "role id"
  // @arg role.alias <optional> "role alias"
  // @arg role.description <optional> "role description"
  // @arg role.extra <optional> "extra data, json string"
  // @ret role
  // @req
  //   {
  //     "role": {
  //       "id": "role-id",
  //       "alias": "renamed-role-alias"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  patchRole: {
    path: '/ai.metathings.service.identityd2.IdentitydService/PatchRole',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_patch_role_pb.PatchRoleRequest,
    responseType: identityd2_patch_role_pb.PatchRoleResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_PatchRoleRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_PatchRoleRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_PatchRoleResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_PatchRoleResponse,
  },
  //
  // @fn GetRole
  // @arg role.id "role id"
  // @ret role
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err InvalidArgument
  // @err Internal
  getRole: {
    path: '/ai.metathings.service.identityd2.IdentitydService/GetRole',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_get_role_pb.GetRoleRequest,
    responseType: identityd2_get_role_pb.GetRoleResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_GetRoleRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_GetRoleRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_GetRoleResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_GetRoleResponse,
  },
  //
  // @fn ListRoles
  // @arg role.id <optional> "role id"
  // @arg role.name <optional> "role name"
  // @arg role.alias <optional> "role alias"
  // @ret roles "list of role"
  // @req
  //   {
  //     "role": {
  //       "id": "role-id",
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  listRoles: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_roles_pb.ListRolesRequest,
    responseType: identityd2_list_roles_pb.ListRolesResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListRolesRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListRolesRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListRolesResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListRolesResponse,
  },
  //
  // @fn ListRolesForEntity
  // @unimplemented
  listRolesForEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListRolesForEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_roles_for_entity_pb.ListRolesForEntityRequest,
    responseType: identityd2_list_roles_for_entity_pb.ListRolesForEntityResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListRolesForEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListRolesForEntityRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListRolesForEntityResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListRolesForEntityResponse,
  },
  //
  // @fn AddActionToRole
  // @arg role.id "role id"
  // @arg action.id "action id"
  // @ret
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     },
  //     "action": {
  //       "id": "action-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  addActionToRole: {
    path: '/ai.metathings.service.identityd2.IdentitydService/AddActionToRole',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_add_action_to_role_pb.AddActionToRoleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_AddActionToRoleRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_AddActionToRoleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn RemoveActionFromRole
  // @arg role.id "role id"
  // @arg action.id "action id"
  // @ret
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     },
  //     "action": {
  //       "id": "action-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  removeActionFromRole: {
    path: '/ai.metathings.service.identityd2.IdentitydService/RemoveActionFromRole',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_remove_action_from_role_pb.RemoveActionFromRoleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_RemoveActionFromRoleRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_RemoveActionFromRoleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn CreateEntity
  // @arg entity.id <optional> "entity id"
  // @arg entity.name "entity name"
  // @arg entity.alias <optional> "entity alias"
  // @arg entity.password <optional> "if create entity for user, password MUST exists, password size from 8 to 128 bytes"
  // @arg entity.extra <optional> "extra data, json string"
  // @ret entity
  // @req
  //   {
  //     "entity": {
  //       "name": "entity-name",
  //       "password": "password",
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  createEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/CreateEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_create_entity_pb.CreateEntityRequest,
    responseType: identityd2_create_entity_pb.CreateEntityResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_CreateEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_CreateEntityRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_CreateEntityResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_CreateEntityResponse,
  },
  //
  // @fn DeleteEntity
  // @arg entity.id "entity id"
  // @ret
  // @req
  //   {
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  deleteEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/DeleteEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_delete_entity_pb.DeleteEntityRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_DeleteEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_DeleteEntityRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn PatchEntity
  // @arg entity.id "entity id"
  // @arg entity.alias <optional> "entity alias"
  // @arg enttiy.password <optional> "entity password"
  // @arg entity.extra <optional> "extra data, json string"
  // @ret entity
  // @req
  //   {
  //     "entity": {
  //       "id": "entity-id",
  //       "password": "new-password"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  patchEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/PatchEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_patch_entity_pb.PatchEntityRequest,
    responseType: identityd2_patch_entity_pb.PatchEntityResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_PatchEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_PatchEntityRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_PatchEntityResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_PatchEntityResponse,
  },
  //
  // @fn GetEnttiy
  // @arg entity.id "entity id"
  // @ret entity
  // @req
  //   {
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  getEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/GetEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_get_entity_pb.GetEntityRequest,
    responseType: identityd2_get_entity_pb.GetEntityResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_GetEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_GetEntityRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_GetEntityResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_GetEntityResponse,
  },
  //
  // @fn ListEntities
  // @arg entity.id <optional> "entity id"
  // @arg entity.name <optional> "entity name"
  // @arg entity.alias <optional> "entity alias"
  // @ret entities "list of entity"
  // @req
  //   {
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  listEntities: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListEntities',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_entities_pb.ListEntitiesRequest,
    responseType: identityd2_list_entities_pb.ListEntitiesResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListEntitiesRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListEntitiesRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListEntitiesResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListEntitiesResponse,
  },
  //
  // @fn ShowEntity
  // @unimplemented
  showEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ShowEntity',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: identityd2_show_entity_pb.ShowEntityResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ai_metathings_service_identityd2_ShowEntityResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ShowEntityResponse,
  },
  //
  // @fn AddRoleToEntity
  // @arg role.id "role id"
  // @arg entity.id "entity id"
  // @ret
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     },
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  addRoleToEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/AddRoleToEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_add_role_to_entity_pb.AddRoleToEntityRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_AddRoleToEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_AddRoleToEntityRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn RemoveRoleFromEntity
  // @arg role.id "role id"
  // @arg entity.id "entity id"
  // @ret
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     },
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  removeRoleFromEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/RemoveRoleFromEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_remove_role_from_entity_pb.RemoveRoleFromEntityRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_RemoveRoleFromEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_RemoveRoleFromEntityRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn AddEntityToDomain
  // @arg domain.id "domain id"
  // @arg entity.id "entity id"
  // @ret
  // @req
  //   {
  //     "domain": {
  //       "id": "domain-id"
  //     },
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  addEntityToDomain: {
    path: '/ai.metathings.service.identityd2.IdentitydService/AddEntityToDomain',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_add_entity_to_domain_pb.AddEntityToDomainRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_AddEntityToDomainRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_AddEntityToDomainRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn RemoveEntityFromDomain
  // @arg domain.id "domain id"
  // @arg entity.id "entity id"
  // @ret
  // @req
  //   {
  //     "domain": {
  //       "id": "domain-id"
  //     },
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  removeEntityFromDomain: {
    path: '/ai.metathings.service.identityd2.IdentitydService/RemoveEntityFromDomain',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_remove_entity_from_domain_pb.RemoveEntityFromDomainRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_RemoveEntityFromDomainRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_RemoveEntityFromDomainRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn CreateGroup
  // @arg group.id <optional> "group id"
  // @arg group.domain.id "create group in domain"
  // @arg group.name "group name"
  // @arg group.alias "group alias"
  // @arg group.description "group description"
  // @arg group.extra "extra data, json string"
  // @ret group
  // @req
  //   {
  //     "group": {
  //       "name": "group-name",
  //       "domain": {
  //         "id": "domain-id"
  //       }
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  createGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_create_group_pb.CreateGroupRequest,
    responseType: identityd2_create_group_pb.CreateGroupResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_CreateGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_CreateGroupRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_CreateGroupResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_CreateGroupResponse,
  },
  //
  // @fn DeleteGroup
  // @arg group.id "group id"
  // @ret
  // @req
  //   {
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  deleteGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_delete_group_pb.DeleteGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_DeleteGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_DeleteGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn PatchGroup
  // @arg group.id "group id"
  // @arg group.alias <optional> "group alias"
  // @arg group.description <optional> "group description"
  // @arg group.extra <optional> "extra data, json string"
  // @ret group
  // @req
  //   {
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  patchGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/PatchGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_patch_group_pb.PatchGroupRequest,
    responseType: identityd2_patch_group_pb.PatchGroupResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_PatchGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_PatchGroupRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_PatchGroupResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_PatchGroupResponse,
  },
  //
  // @fn GetGroup
  // @arg group.id "group id"
  // @ret group
  // @req
  //   {
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  getGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_get_group_pb.GetGroupRequest,
    responseType: identityd2_get_group_pb.GetGroupResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_GetGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_GetGroupRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_GetGroupResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_GetGroupResponse,
  },
  //
  // @fn ListGroups
  // @arg group.id <optional> "group id"
  // @arg group.domain.id <optional> "domain id"
  // @arg group.name <optional> "group name"
  // @arg group.alias <optional> "group alias"
  // @ret groups "list of group"
  // @req
  //   {
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  listGroups: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListGroups',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_groups_pb.ListGroupsRequest,
    responseType: identityd2_list_groups_pb.ListGroupsResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListGroupsRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListGroupsRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListGroupsResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListGroupsResponse,
  },
  //
  // @fn ListGroupsForSubject
  // @arg subject.id "subject id"
  // @ret groups
  // @req
  //   { ... }
  // @err Internal
  listGroupsForSubject: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListGroupsForSubject',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_groups_for_subject_pb.ListGroupsForSubjectRequest,
    responseType: identityd2_list_groups_for_subject_pb.ListGroupsForSubjectResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListGroupsForSubjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListGroupsForSubjectRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListGroupsForSubjectResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListGroupsForSubjectResponse,
  },
  //
  // @fn ListGroupsForObject
  // @arg object.id "object id"
  // @ret groups
  // @req
  //   { ... }
  // @err Internal
  listGroupsForObject: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListGroupsForObject',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_groups_for_object_pb.ListGroupsForObjectRequest,
    responseType: identityd2_list_groups_for_object_pb.ListGroupsForObjectResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListGroupsForObjectRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListGroupsForObjectRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListGroupsForObjectResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListGroupsForObjectResponse,
  },
  //
  // @fn ShowGroups
  // @unimplemented
  showGroups: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ShowGroups',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: identityd2_show_groups_pb.ShowGroupsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ai_metathings_service_identityd2_ShowGroupsResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ShowGroupsResponse,
  },
  //
  // @fn AddRoleToGroup
  // @arg role.id "role id"
  // @arg group.id "group id"
  // @ret
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     },
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  addRoleToGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/AddRoleToGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_add_role_to_group_pb.AddRoleToGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_AddRoleToGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_AddRoleToGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn RemoveRoleFromGroup
  // @arg role.id "role id"
  // @arg group.id "group id"
  // @ret
  // @req
  //   {
  //     "role": {
  //       "id": "role-id"
  //     },
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  removeRoleFromGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/RemoveRoleFromGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_remove_role_from_group_pb.RemoveRoleFromGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_RemoveRoleFromGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_RemoveRoleFromGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn AddSubjectToGroup
  // @arg subject.id "subject id"
  // @arg group.id "group id"
  // @ret
  // @req
  //   {
  //     "subject": {
  //       "id": "subject-id"
  //     },
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  addSubjectToGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/AddSubjectToGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_add_subject_to_group_pb.AddSubjectToGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_AddSubjectToGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_AddSubjectToGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn RemoveSubjectFromGroup
  // @arg subject.id "subject id"
  // @arg group.id "group id"
  // @ret
  // @req
  //   {
  //     "subject": {
  //       "id": "subject-id"
  //     },
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  removeSubjectFromGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/RemoveSubjectFromGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_remove_subject_from_group_pb.RemoveSubjectFromGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_RemoveSubjectFromGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_RemoveSubjectFromGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn AddObjectToGroup
  // @arg object.id "object id"
  // @arg group.id "group id"
  // @ret
  // @req
  //   {
  //     "object": {
  //       "id": "object-id"
  //     },
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  addObjectToGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/AddObjectToGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_add_object_to_group_pb.AddObjectToGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_AddObjectToGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_AddObjectToGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn RemoveObjectFromGroup
  // @arg object.id "object id"
  // @arg group.id "group id"
  // @ret
  // @req
  //   {
  //     "object": {
  //       "id": "object-id"
  //     },
  //     "group": {
  //       "id": "group-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  removeObjectFromGroup: {
    path: '/ai.metathings.service.identityd2.IdentitydService/RemoveObjectFromGroup',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_remove_object_from_group_pb.RemoveObjectFromGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_RemoveObjectFromGroupRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_RemoveObjectFromGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn CreateCredential
  // @arg credential.id <optional> "credential id"
  // @arg credential.domain.id "domain id"
  // @arg credential.entity.id "entity id"
  // @arg credential.name "credential name"
  // @arg credential.alias <optional> "credential alias"
  // @arg credential.secret <optional> "credential secret"
  // @arg credential.description <optional> "credential description"
  // @arg credential.expires_at <optional> "expires time"
  // @arg credential.roles.id <list> <optional> "list of role"
  // @arg secret_size <optional> "secret size, default 32 bytes"
  // @ret credential
  // @req
  //   {
  //     "credential": {
  //       "domain": {
  //         "id": "domain-id"
  //       },
  //       "entity": {
  //         "id": "entity-id"
  //       },
  //       "name": "cred-name",
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  createCredential: {
    path: '/ai.metathings.service.identityd2.IdentitydService/CreateCredential',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_create_credential_pb.CreateCredentialRequest,
    responseType: identityd2_create_credential_pb.CreateCredentialResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_CreateCredentialRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_CreateCredentialRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_CreateCredentialResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_CreateCredentialResponse,
  },
  //
  // @fn DeleteCredential
  // @arg credential.id "credential id"
  // @ret
  // @req
  //   {
  //     "credential": {
  //       "id": "credential-id"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  deleteCredential: {
    path: '/ai.metathings.service.identityd2.IdentitydService/DeleteCredential',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_delete_credential_pb.DeleteCredentialRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_DeleteCredentialRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_DeleteCredentialRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn PatchCredential
  // @arg credential.id "credential id"
  // @arg credential.alias "credential alias"
  // @arg credential.description "credential description"
  // @ret credential
  // @req
  //   {
  //     "credential": {
  //       "id": "credential-id",
  //       "alias": "renamed-credential-alias"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  patchCredential: {
    path: '/ai.metathings.service.identityd2.IdentitydService/PatchCredential',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_patch_credential_pb.PatchCredentialRequest,
    responseType: identityd2_patch_credential_pb.PatchCredentialResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_PatchCredentialRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_PatchCredentialRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_PatchCredentialResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_PatchCredentialResponse,
  },
  //
  // @fn GetCredential
  // @arg credential.id "credential id"
  // @ret credential
  // @req
  //   {
  //     "credential": {
  //       "id": "credential-id",
  //     }
  //   }
  // @res
  //   { ... }
  getCredential: {
    path: '/ai.metathings.service.identityd2.IdentitydService/GetCredential',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_get_credential_pb.GetCredentialRequest,
    responseType: identityd2_get_credential_pb.GetCredentialResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_GetCredentialRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_GetCredentialRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_GetCredentialResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_GetCredentialResponse,
  },
  //
  // @fn ListCredentials
  // @arg credential.id <optional> "credential id"
  // @arg credential.domain.id <optional> "domain id"
  // @arg credential.entity.id <optional> "entity id"
  // @arg credential.name <optional> "credential name"
  // @arg credential.alias <optional> "credential alias"
  // @ret credentials "list of credential"
  // @req
  //   {
  //     "credential": {
  //       "id": "credential-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  listCredentials: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListCredentials',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_credentials_pb.ListCredentialsRequest,
    responseType: identityd2_list_credentials_pb.ListCredentialsResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListCredentialsRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListCredentialsRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListCredentialsResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListCredentialsResponse,
  },
  //
  // @fn ListCredentialsForEntity
  // @arg entity.id "entity id"
  // @req
  //   {
  //     "entity": {
  //       "id": "entity-id"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  listCredentialsForEntity: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ListCredentialsForEntity',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_list_credentials_for_entity_pb.ListCredentialsForEntityRequest,
    responseType: identityd2_list_credentials_for_entity_pb.ListCredentialsForEntityResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ListCredentialsForEntityRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ListCredentialsForEntityRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ListCredentialsForEntityResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ListCredentialsForEntityResponse,
  },
  //
  // @fn IssueTokenByCredential
  // @arg credential.id "credential id"
  // @arg credential.domain.id "domain id"
  // @arg timestamp "timestamp"
  // @arg nonce "nonce"
  // @arg hmac "=hmac(key, credential.id+timestamp+nonce), helper: pkg/identityd2/contrib/issue_token_by_credential.go:NewIssueTokenByCredentialRequest"
  // @ret token
  // @req
  //   {
  //     "credential": {
  //       "id": "credential-id"
  //     },
  //     "timestamp": {
  //       "seconds": 0,
  //       "nanos": 0
  //     },
  //     "nonce": 0,
  //     "hmac": "hmac"
  //   }
  // @res
  //   { ... }
  // @err Internal
  // @err Unauthenticated
  issueTokenByCredential: {
    path: '/ai.metathings.service.identityd2.IdentitydService/IssueTokenByCredential',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_issue_token_by_credential_pb.IssueTokenByCredentialRequest,
    responseType: identityd2_issue_token_by_credential_pb.IssueTokenByCredentialResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_IssueTokenByCredentialRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_IssueTokenByCredentialRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_IssueTokenByCredentialResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_IssueTokenByCredentialResponse,
  },
  //
  // @fn IssueTokenByPassword
  // @arg entity.domains.id "domain id, less 1 domain"
  // @arg entity.id <optional> "entity id"
  // @arg entity.name <optional> "entity name"
  // @arg entity.password "entity password"
  // @ret token
  // @req
  //   {
  //     "entity": {
  //       "domains": [{"id": "domain-id"}],
  //       "name": "test",
  //       "password": "test"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  // @err Unauthenticated
  issueTokenByPassword: {
    path: '/ai.metathings.service.identityd2.IdentitydService/IssueTokenByPassword',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_issue_token_by_password_pb.IssueTokenByPasswordRequest,
    responseType: identityd2_issue_token_by_password_pb.IssueTokenByPasswordResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_IssueTokenByPasswordRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_IssueTokenByPasswordRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_IssueTokenByPasswordResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_IssueTokenByPasswordResponse,
  },
  //
  // @fn IssueTokenByToken
  // @arg token.domain.id "domain id"
  // @arg token.text "token text"
  // @ret token
  // @req
  //   {
  //     "token": {
  //       "domain": {
  //         "id": "domain-id"
  //       },
  //       "text": "token-text"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  // @err Unauthenticated
  issueTokenByToken: {
    path: '/ai.metathings.service.identityd2.IdentitydService/IssueTokenByToken',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_issue_token_by_token_pb.IssueTokenByTokenRequest,
    responseType: identityd2_issue_token_by_token_pb.IssueTokenByTokenResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_IssueTokenByTokenRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_IssueTokenByTokenRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_IssueTokenByTokenResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_IssueTokenByTokenResponse,
  },
  //
  // @fn RevokeToken
  // @arg token.text "token text"
  // @ret
  // @req
  //   {
  //     "token": {
  //       "text": "token-text"
  //     }
  //   }
  // @res
  //   { }
  // @err Internal
  // @err FailedPrecondition
  revokeToken: {
    path: '/ai.metathings.service.identityd2.IdentitydService/RevokeToken',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_revoke_token_pb.RevokeTokenRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_RevokeTokenRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_RevokeTokenRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn ValidateToken
  // @arg token.text "token text"
  // @ret
  // @req
  //   {
  //     "token": {
  //       "text": "token-text"
  //     }
  //   }
  // @res
  //   { ... }
  // @err Internal
  // @err InvalidArgument
  // @err Unauthenticated
  validateToken: {
    path: '/ai.metathings.service.identityd2.IdentitydService/ValidateToken',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_validate_token_pb.ValidateTokenRequest,
    responseType: identityd2_validate_token_pb.ValidateTokenResponse,
    requestSerialize: serialize_ai_metathings_service_identityd2_ValidateTokenRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_ValidateTokenRequest,
    responseSerialize: serialize_ai_metathings_service_identityd2_ValidateTokenResponse,
    responseDeserialize: deserialize_ai_metathings_service_identityd2_ValidateTokenResponse,
  },
  //
  // @fn CheckToken
  // @arg token.text "token text"
  // @arg token.domain.id "domain id"
  // @ret
  // @req
  //   {
  //     "token": {
  //       "domain": {
  //         "id": "domain-id"
  //       },
  //       "text": "token-text"
  //     }
  //   }
  // @err Internal
  // @err InvalidArgument
  // @err Unauthenticated
  checkToken: {
    path: '/ai.metathings.service.identityd2.IdentitydService/CheckToken',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_check_token_pb.CheckTokenRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_CheckTokenRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_CheckTokenRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
  // @fn AuthorizeToken
  // @arg object.id "object id"
  // @arg action.name "action name"
  // @ret
  // @req
  //   {
  //     "object": {
  //       "id": "object-id"
  //     },
  //     "action": {
  //       "name": "action-name"
  //     }
  //   }
  // @res
  // @err PermissionDenied
  // @err Internal
  authorizeToken: {
    path: '/ai.metathings.service.identityd2.IdentitydService/AuthorizeToken',
    requestStream: false,
    responseStream: false,
    requestType: identityd2_authorize_token_pb.AuthorizeTokenRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ai_metathings_service_identityd2_AuthorizeTokenRequest,
    requestDeserialize: deserialize_ai_metathings_service_identityd2_AuthorizeTokenRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.IdentitydServiceClient = grpc.makeGenericClientConstructor(IdentitydServiceService);
