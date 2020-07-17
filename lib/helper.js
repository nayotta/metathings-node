const simpleProtoTypes = ['string', 'bool', 'bytes', 'uint32', 'int32', 'uint64', 'int64', 'float', 'double']
const googleWrappersProtoTypes = [
  'google.protobuf.DoubleValue',
  'google.protobuf.FloatValue',
  'google.protobuf.Int64Value',
  'google.protobuf.Uint64Value',
  'google.protobuf.Int32Value',
  'google.protobuf.Uint32Value',
  'google.protobuf.BoolValue',
  'google.protobuf.StringValue',
  'google.protobuf.BytesValue'
]
const googleTimestampProtoTypes = ['google.protobuf.Timestamp']
const googleStructProtoTypes = ['google.protobuf.Struct']

/**
 * 构建请求数据结构体
 * @param {*} iProto protobuf.Root
 * @param {*} Message protobuf.Type
 * @param {*} data 数据
 */
function buildRequestMessage (iProto, Message, data) {
  const messageFields = Message.fields
  const val = JSON.parse(JSON.stringify(data))
  Object.keys(data).forEach(field => {
    if (!messageFields || !messageFields[field]) return
    const {
      type: fieldType,
      repeated: fieldRepeated
      // map: fieldMap
    } = messageFields[field]

    const oneof = messageFields[field] && messageFields[field].partOf && messageFields[field].partOf.oneof

    // oneof
    if (oneof) {
      let oneofVal = {
        [field]: {}
      }
      Object.entries(data[field]).forEach(([key, value]) => {
        const keyFieldType = Message.lookupType(fieldType).fields[key].type
        let builded = false
        if (typeof value !== 'object') {
          [ oneofVal, builded ] = buildKnownValue(iProto, keyFieldType, value)
        } else {
          oneofVal = buildRequestMessage(iProto, Message.lookupType(keyFieldType), value)
          builded = true
        }
        if (!builded) {
          console.error(`Unknown fieldType ${fieldType}`)
        }
        val[field] = {
          [key]: oneofVal
        }
      })
      return
    }

    // repeated
    if (fieldRepeated) {
      const repeatedData = []
      data[field].forEach(item => {
        let data = item
        let builded = false
        const FieldMessage = iProto.lookupType(fieldType)
        if (typeof item !== 'object') {
          [ data, builded ] = buildKnownValue(iProto, fieldType, item)
        } else {
          data = buildRequestMessage(iProto, FieldMessage, item)
          builded = true
        }
        if (!builded) {
          console.error(`Unknown fieldType ${fieldType}`)
        }
        repeatedData.push(data)
      })
      val[field] = repeatedData
      return
    }

    const [ fieldData, builded ] = buildKnownValue(iProto, fieldType, data[field])
    if (builded) {
      val[field] = fieldData
    } else {
      const FieldMessage = Message.lookupType(fieldType)
      val[field] = buildRequestMessage(iProto, FieldMessage, data[field])
    }
  })


  return val
}

/**
 * 构建已知的数据结构
 */
function buildKnownValue (iProto, fieldType, val) {
  let out = val
  let builded = false
  if (simpleProtoTypes.includes(fieldType)) {
    // simple type
    out = val
    builded = true
  } else if (googleWrappersProtoTypes.includes(fieldType)) {
    // google.proto.wrappers
    out = buildGoogleWrappersValue(val)
    builded = true
  } else if (googleTimestampProtoTypes.includes(fieldType)) {
    // google.proto.Timestamp
    out = buildGoogleTimestampValue(iProto, val)
    builded = true
  } else if (googleStructProtoTypes.includes(fieldType)) {
    // google.proto.Struct
    out = buildGoogleStructValue(val)
    builded = true
  }
  return [ out, builded ]
}

/**
 * 构建google.protobuf.<wrappers>数据结构
 * @param {*} val
 */
function buildGoogleWrappersValue (val) {
  return { value: val }
}

/**
 * 构建google.protobuf.Timestamp数据结构
 * @param {*} iProto
 * @param {*} val
 */
function buildGoogleTimestampValue (iProto, val) {
  const Timestamp = iProto.lookupType('google.protobuf.Timestamp')
  const value = new Date(val).getTime()
  return Timestamp.fromObject({
    seconds: value / 1000,
    nanos: value % 1000 * 1e6
  })
}

/**
 * 构建google.protobuf.Struct数据结构
 * @param {*} val
 * @param {*} sub
 */
function buildGoogleStructValue (val, sub = false) {
  const typeofVal = typeof val
  const baseValueTypes = {
    number: 'numberValue',
    string: 'stringValue',
    boolean: 'boolValue'
  }
  if (Object.keys(baseValueTypes).includes(typeofVal)) {
    return {
      [baseValueTypes[typeofVal]]: val
    }
  }
  if (Array.isArray(val)) {
    const out = {
      listValue: {
        values: []
      }
    }
    val.forEach(valItem => {
      const itemVal = buildGoogleStructValue(valItem, true)
      out.listValue.values.push(itemVal)
    })
    return out
  }
  if (typeofVal === 'object') {
    const out = sub ? {
      structValue: {
        fields: {}
      }
    } : {
      fields: {}
    }
    Object.keys(val).forEach(field => {
      if (sub) {
        out.structValue.fields[field] = buildGoogleStructValue(val[field], true)
      } else {
        out.fields[field] = buildGoogleStructValue(val[field], true)
      }
    })
    return out
  }
}

module.exports = {
  buildRequestMessage
}
