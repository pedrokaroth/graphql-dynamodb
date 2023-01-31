'use strict'

const HeroFactory = require('./src/core/factories/heroFactory')
const SkillFactory = require('./src/core/factories/skillFactory')

const { ApolloServer } = require('apollo-server-lambda')

const schema = require('./src/graphql')

const server = new ApolloServer({
  schema,
  context: async () => ({
    Hero: await HeroFactory.createInstace(),
    Skill: await SkillFactory.createInstance()
  }),
  introspection: process.env.IS_LOCAL,
  playground: process.env.IS_LOCAL
})

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*'
    }
  }
})
