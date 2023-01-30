const Service = require('./service')

class HeroService extends Service {
  constructor ({ repository }) {
    super({ repository })
  }
}

module.exports = HeroService
