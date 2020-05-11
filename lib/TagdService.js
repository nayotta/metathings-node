const Service = require('./Service')

/**
 *  TagdService
 *
 * @class TagdService
 */
class TagdService extends Service {
  constructor ({ host, domain, token, rootCerts, secure }) {
    super({
      serviceName: 'tagd',
      servicePath: ['ai', 'metathings', 'service', 'tagd', 'TagdService'],
      host,
      domain,
      token,
      rootCerts,
      secure
    })
  }
}

module.exports = TagdService
