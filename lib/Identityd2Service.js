const Service = require('./Service')

/**
 *  Identityd2Service
 *
 * @class Identityd2Service
 */
class Identityd2Service extends Service {
  constructor ({ host, domain, token, rootCerts, secure }) {
    super({
      serviceName: 'identityd2',
      servicePath: ['ai', 'metathings', 'service', 'identityd2', 'IdentitydService'],
      host,
      domain,
      token,
      rootCerts,
      secure
    })
  }
}

module.exports = Identityd2Service
