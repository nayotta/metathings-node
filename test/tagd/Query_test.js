/* eslint-disable no-undef */
const assert = require('assert')
const protobuf = require('protobufjs')
const { buildRequestMessage } = require('../../lib/helper')

describe('Identityd2', function () {
  const iProto = protobuf.Root.fromJSON(require('../../jsons/identityd2_service_pb.json'))

  describe('#IssueTokenByPassword', function () {
    it('check IssueTokenByPassword method request message', function () {
      const MethodRequest = iProto.lookupType('IssueTokenByPasswordRequest')
      const message = MethodRequest.create(buildRequestMessage(iProto, MethodRequest, {
        entity: {
          name: 'name',
          password: 'password',
          domains: [{
            id: 'domain-id'
          }]
        }
      }))
      assert.equal(message.entity.name.value, 'name')
      assert.equal(message.entity.password.value, 'password')
      assert.equal(message.entity.domains.length, 1)
      assert.equal(message.entity.domains[0].id.value, 'domain-id')
    })
  })
})
