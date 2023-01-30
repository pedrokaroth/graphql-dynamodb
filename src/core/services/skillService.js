const Service = require('./service')

class SkillService extends Service {
  constructor ({ repository }) {
    super({ repository })
  }
}

module.exports = SkillService
