const Service = require('./Service')

/**
 *  MtpdService
 *
 * @class MtpdService
 */
class MtpdService extends Service {
  constructor ({ host, domain, token, rootCerts, secure }) {
    super({
      serviceName: 'mtpd',
      servicePath: ['mtpd', 'MetaPlatformSrv'],
      host,
      domain,
      token,
      rootCerts,
      secure
    })
  }
}

module.exports = MtpdService
