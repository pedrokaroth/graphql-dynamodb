const Repository = require('./repository')
const schema = require('./schema/heroSchema')

class HeroRepository extends Repository {
  constructor () {
    super({ schema })
  }
}

module.exports = HeroRepository
