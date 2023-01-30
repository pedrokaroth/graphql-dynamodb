const { randomUUID } = require('node:crypto')

class Repository {
  constructor ({ schema }) {
    this.schema = schema
  }

  async create (values) {
    return this.schema.create({ id: randomUUID(), ...values })
  }

  async findById (id) {
    return this.schema.query({ id: { eq: id } }).exec()
  }

  async findAll (query) {
    return this.schema.scan(query).exec()
  }
}

module.exports = Repository
