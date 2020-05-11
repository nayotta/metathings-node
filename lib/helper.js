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
        oneofVal = buildRequestMessage(iProto, Message.lookupType(keyFieldType), value)
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
        const FieldMessage = iProto.lookupType(fieldType)
        const data = buildRequestMessage(iProto, FieldMessage, item)
        repeatedData.push(data)
      })
      val[field] = repeatedData
      return
    }

    // simple type
    if (simpleProtoTypes.includes(fieldType)) val[field] = data[field]

    // google.proto.wrappers
    else if (googleWrappersProtoTypes.includes(fieldType)) val[field] = buildGoogleWrappersValue(data[field])

    // google.proto.Timestamp
    else if (googleTimestampProtoTypes.includes(fieldType)) val[field] = buildGoogleTimestampValue(iProto, data[field])

    // others
    else {
      const FieldMessage = Message.lookupType(fieldType)
      val[field] = buildRequestMessage(iProto, FieldMessage, data[field])
    }
  })

  return val
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

module.exports = {
  buildRequestMessage
}
