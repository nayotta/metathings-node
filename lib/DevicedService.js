const Service = require('./Service')

/**
 *  DevicedService
 *
 * @class Deviced
 */
class DevicedService extends Service {
  constructor ({ host, domain, token, rootCerts, secure }) {
    super({
      serviceName: 'deviced',
      servicePath: ['ai', 'metathings', 'service', 'deviced', 'DevicedService'],
      host,
      domain,
      token,
      rootCerts,
      secure
    })
  }
}

module.exports = DevicedService
