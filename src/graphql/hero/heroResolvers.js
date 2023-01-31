module.exports = {
  Query: {
    async getHero (root, args, context, info) {
      return 'Hello World'
    }
  },
  Mutation: {
    async createHero (root, args, context, info) {
      return 'Hello World'
    }
  }
}
