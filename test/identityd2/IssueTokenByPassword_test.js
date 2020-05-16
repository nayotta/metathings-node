/* eslint-disable no-undef */
const assert = require('assert')
const protobuf = require('protobufjs')
const { buildRequestMessage } = require('../../lib/helper')

describe('Tagd', function () {
  const iProto = protobuf.Root.fromJSON(require('../../jsons/tagd_service_pb.json'))

  describe('#Query', function () {
    it('check Query method request message', function () {
      const MethodRequest = iProto.lookupType('QueryRequest')
      const message = MethodRequest.create(buildRequestMessage(iProto, MethodRequest, {
        tags: ['tag1'],
        namespace: 'namespace'
      }))
      assert.equal(message.tags.length, 1)
      assert.equal(message.tags[0].value, 'tag1')
      assert.equal(message.namespace.value, 'namespace')
    })
  })
})
