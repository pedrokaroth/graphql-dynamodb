'use strict'

const HeroFactory = require('./src/core/factories/heroFactory')
const SkillFactory = require('./src/core/factories/skillFactory')

const { ApolloServer } = require('apollo-server-lambda')

const schema = require('./src/graphql')

// TODO: Deixar somente no local
const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true
})

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*'
    }
  }
})

module.exports.teste = async function () {
  const skillFactory = await SkillFactory.createInstance()
  const heroFactory = await HeroFactory.createInstace()

  const skill = await skillFactory.create({ name: 'novo teste', value: 10 })
  console.log('Inserindo item', skill)

  const buscaSkill = await skillFactory.findById(skill.id)
  console.log(buscaSkill)

  const hero = await heroFactory.create({ name: 'novo teste', skills: [skill.id] })
  console.log('Inserindo hero', hero)

  const buscaHero = await heroFactory.findById(hero.id)
  console.log(buscaHero)
}
