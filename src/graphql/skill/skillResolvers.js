module.exports = {
  Query: {
    async getSkill (root, args, context, info) {
      return 'Hello World'
    }
  },
  Mutation: {
    async createSkill (root, args, context, info) {
      return 'Hello World'
    }
  }
}
