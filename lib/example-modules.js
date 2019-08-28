// 引入 服务
const {
  Identityd2Service
} = require('./index')

const iService = new Identityd2Service('GRPC_HOST')

function generateConfig (method, data = {}, header = {}) {
  return {
    method,
    data,
    header
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
      password: 'password',
      domains: [{
        id: 'id'
      }]
    }
  }
  const config = generateConfig('IssueTokenByPassword', data)

  return iService.send(config)
}

login().then(console.log, console.log)