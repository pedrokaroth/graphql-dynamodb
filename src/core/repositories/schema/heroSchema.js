const { Schema, model } = require('dynamoose')

module.exports = model('heroes', new Schema({
  id: {
    type: String,
    required: true,
    hashKey: true
  },
  name: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    schema: [String],
    required: true
  }
}))
