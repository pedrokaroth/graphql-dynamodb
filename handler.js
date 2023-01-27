'use strict'

const { dynamodb } = require('./factory')

module.exports.hello = async (event) => {
  const heroes = await dynamodb.scan({
    TableName: 'heroes'
  }).promise()

  const skills = await dynamodb.scan({
    TableName: 'skills'
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        heroes,
        skills
      }
    )
  }
}
