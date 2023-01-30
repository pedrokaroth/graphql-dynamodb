const HeroRepository = require('../repositories/heroRepository')
const HeroService = require('../services/heroService')

async function createInstace () {
  const repository = new HeroRepository()
  return new HeroService({ repository })
}

module.exports = { createInstace }
