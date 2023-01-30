'use strict'

const HeroFactory = require('./src/core/factories/heroFactory')
const SkillFactory = require('./src/core/factories/skillFactory')

const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      credentials: true
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
