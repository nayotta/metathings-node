const { Identityd2Service } = require('./index')

const iService = new Identityd2Service({
  host: '',
  domain: '',
  token: '',
  rootCerts: null,
  secure: true
})

async function go () {
  const res = await iService.send({
    method: '',
    data: {},
    header: {}
  }).catch(err => err)

  console.log(res)
}

go()
