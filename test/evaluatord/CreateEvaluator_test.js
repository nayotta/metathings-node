/* eslint-disable no-undef */
const assert = require('assert')
const protobuf = require('protobufjs')
const { buildRequestMessage } = require('../../lib/helper')

describe('Evaluatord', function () {
  const iProto = protobuf.Root.fromJSON(require('../../jsons/evaluatord_service_pb.json'))

  describe('#CreateEvaluator', function () {
    it('check CreateEvaluator method request message', function () {
      const MethodRequest = iProto.lookupType('CreateEvaluatorRequest')
      const newEvaluator = {
        evaluator: {
          alias: 'test_alias',
          description: 'test_description',
          sources: [],
          operator: {
            driver: 'lua',
            lua: {
              code: 'return {}'
            }
          },
          config: {
            string: 'string_val',
            bool: true,
            number: 1,
            struct: {
              structField1: 1
            },
            list: [
              1,
              '12',
              {
                listField: 1
              },
              [1, '12']
            ]
          }
        }
      }
      const message = MethodRequest.create(buildRequestMessage(iProto, MethodRequest, JSON.parse(JSON.stringify(newEvaluator))))
      assert.equal(message.evaluator.alias.value, newEvaluator.evaluator.alias)
      assert.equal(message.evaluator.description.value, newEvaluator.evaluator.description)
      assert.equal(message.evaluator.operator.driver.value, newEvaluator.evaluator.operator.driver)
      assert.equal(message.evaluator.operator.lua.code.value, newEvaluator.evaluator.operator.lua.code)
      assert.equal(message.evaluator.config.fields.bool.boolValue, newEvaluator.evaluator.config.bool)
      assert.equal(message.evaluator.config.fields.string.stringValue, newEvaluator.evaluator.config.string)
      assert.equal(message.evaluator.config.fields.number.numberValue, newEvaluator.evaluator.config.number)
      assert.equal(message.evaluator.config.fields.struct.structValue.fields.structField1.numberValue, newEvaluator.evaluator.config.struct.structField1)
      assert.equal(message.evaluator.config.fields.list.listValue.values[0].numberValue, newEvaluator.evaluator.config.list[0])
      assert.equal(message.evaluator.config.fields.list.listValue.values[1].stringValue, newEvaluator.evaluator.config.list[1])
      assert.equal(message.evaluator.config.fields.list.listValue.values[2].structValue.fields.listField.numberValue, newEvaluator.evaluator.config.list[2].listField)
      assert.equal(message.evaluator.config.fields.list.listValue.values[3].listValue.values[0].numberValue, newEvaluator.evaluator.config.list[3][0])
      assert.equal(message.evaluator.config.fields.list.listValue.values[3].listValue.values[1].stringValue, newEvaluator.evaluator.config.list[3][1])
    })
  })
})
