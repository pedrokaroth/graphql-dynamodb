const Repository = require('./repository')
const schema = require('./schema/skillSchema')

class SkillRepository extends Repository {
  constructor () {
    super({ schema })
  }
}

module.exports = SkillRepository
