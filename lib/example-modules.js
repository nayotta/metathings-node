// 引入 服务
const {
  Identityd2Service
} = require('./index')

const iService = new Identityd2Service('GRPC_HOST')

function generateConfig (method, data = {}, header = {}, raw) {
  return {
    method,
    data,
    header,
    raw
  }
}

/**
 *  登录
 *
 * @returns
 */
function login () {
  const data = {
    entity: {
      name: 'name',
      password: 'name',
      domains: [{
        id: 'id'
      }]
    }
  }
  const config = generateConfig('IssueTokenByPassword', data, {}, false)

  return iService.send(config)
}

login().then(console.log, console.log)