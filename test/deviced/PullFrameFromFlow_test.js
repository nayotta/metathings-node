/* eslint-disable no-undef */
const assert = require('assert')
const protobuf = require('protobufjs')
const { buildRequestMessage } = require('../../lib/helper')

describe('Deviced', function () {
  const iProto = protobuf.Root.fromJSON(require('../../jsons/deviced_service_pb.json'))

  describe('#PullFrameFromFlow', function () {
    it('check PullFrameFromFlow method request message', function () {
      const MethodRequest = iProto.lookupType('PullFrameFromFlowRequest')
      const message = MethodRequest.create(buildRequestMessage(iProto, MethodRequest, {
        id: 'id',
        config: {
          device: {
            id: 'device-id',
            name: 'device-name',
            flows:[{
              name: 'flow-name1'
            }]
          }
        }
      }))
      assert.equal(message.id.value, 'id')
      assert.equal(message.config.device.id.value, 'device-id')
      assert.equal(message.config.device.name.value, 'device-name')
      assert.equal(message.config.device.flows.length, 1)
      assert.equal(message.config.device.flows[0].name.value, 'flow-name1')
    })
  })
})
