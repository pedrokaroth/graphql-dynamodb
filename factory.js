const AWS = require('aws-sdk')

if (process.env.IS_LOCAL) {
  AWS.config.update({
    credentials: {
      accessKeyId: 'teste',
      secretAccessKey: 'teste'
    },
    endpoint: 'http://localhost:4566'
  })
}

const dynamodb = new AWS.DynamoDB.DocumentClient()

module.exports = {
  dynamodb
}
