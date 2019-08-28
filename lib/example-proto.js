const grpc = require('grpc')

const googleProtobufWrappersPb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const IssueTokenByPassword = require('./proto/identityd2/issue_token_by_password_pb')
const Model = require('./proto/identityd2/model_pb')

// opDomain
const opDomain = new Model.OpDomain()
const id = new googleProtobufWrappersPb.StringValue()
id.setValue('id')
opDomain.setId(id)

// opEntity
const name = new googleProtobufWrappersPb.StringValue()
name.setValue('name')
const password = new googleProtobufWrappersPb.StringValue()
password.setValue('password')

const opEntity = new Model.OpEntity()
opEntity.setDomainsList([opDomain])
opEntity.setName(name)
opEntity.setPassword(password)

// IssueTokenByPasswordRequest
const issueTokenByPasswordRequest = new IssueTokenByPassword.IssueTokenByPasswordRequest()
issueTokenByPasswordRequest.setEntity(opEntity)

// client
const services = require('./proto/identityd2/service_grpc_pb')
const client = new services.IdentitydServiceClient('GRPC_HOST', grpc.credentials.createInsecure())

client.issueTokenByPassword(issueTokenByPasswordRequest, function (err, res) {
  if (err) {
    console.log('--------err--------\n', err)
    return
  }
  console.log('--------res--------\n', res.toObject())
})