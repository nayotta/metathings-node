const Service = require('./Service')

/**
 *  EvaluatordService
 *
 * @class EvaluatordService
 */
class EvaluatordService extends Service {
  constructor ({ host, domain, token, rootCerts, secure }) {
    super({
      serviceName: 'evaluatord',
      servicePath: ['ai', 'metathings', 'service', 'evaluatord', 'EvaluatordService'],
      host,
      domain,
      token,
      rootCerts,
      secure
    })
  }
}

module.exports = EvaluatordService
