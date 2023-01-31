module.exports = {
  Hero: {
    async skills (root, args, context) {
      const skills = root.skills.map(skill => context.Skill.findById(skill))
      const response = await Promise.all(skills)
      return response.flat()
    }
  },
  Query: {
    async getHero (root, args, context, info) {
      return context.Hero.findAll(args)
    }
  },
  Mutation: {
    async createHero (root, args, context, info) {
      const { id } = await context.Hero.create(args)
      return id
    }
  }
}
