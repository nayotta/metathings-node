const {
  PatchGroupRequest,
  PatchGroupResponse
} = require('../../proto/identityd2/patch_group_pb')

const {
  generateOpGroup,
  generateGroup
} = require('./models')

/**
 * 生成 PatchGroupRequest 数据
 *  message PatchGroupRequest {
      OpGroup group = 1 [(validator.field) = {msg_exists: true}];
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchGroupRequest (options) {
  if (!('group' in options)) {
    throw new Error('group is required!')
  }

  // 构建 patchGroupRequest
  const patchGroupRequest = new PatchGroupRequest()

  // 处理对应数据类型
  const groupVal = options.group
  const opGroup = generateOpGroup(groupVal)
  patchGroupRequest.setGroup(opGroup)

  return patchGroupRequest
}

/**
 *  生成 PatchGroupResponse 数据
 *  message PatchGroupResponse {
      Group group = 1;
    }
 *
 * @param {*} options 待操作数据
 * @returns
 */
function generatePatchGroupResponse (options) {
  // 构建 patchGroupResponse
  const patchGroupResponse = new PatchGroupResponse()

  // 处理对应数据类型
  if ('group' in options) {
    const groupVal = options.group
    const group = generateGroup(groupVal)
    patchGroupResponse.setGroup(group)
  }

  return patchGroupResponse
}

module.exports = {
  generatePatchGroupRequest,
  generatePatchGroupResponse
}
