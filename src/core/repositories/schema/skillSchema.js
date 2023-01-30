const { Schema, model } = require('dynamoose')

module.exports = model('skills', new Schema({
  id: {
    type: String,
    required: true,
    hashKey: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
}))
