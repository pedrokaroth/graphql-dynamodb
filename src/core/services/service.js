class Service {
  constructor ({ repository }) {
    this.repository = repository
  }

  async create (values) {
    return this.repository.create(values)
  }

  async findById (id) {
    return this.repository.findById(id)
  }

  async findAll (query) {
    return this.repository.findAll(query)
  }
}

module.exports = Service
