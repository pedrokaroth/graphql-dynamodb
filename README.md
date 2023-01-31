<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->


# Graphql, Apollo Server and Designs Patterns

This project was created with the aim of training some new technologies, such as [Graphql](https://graphql.org/) and [dynamoDB](https://aws.amazon.com/pt/dynamodb/). To build the application, the [Repository](https://www.cosmicpython.com/book/chapter_02_repository.html), [Factory](https://refactoring.guru/design-patterns/factory-method) and [DI](https://www.4mage.com.br/design-pattern-dependency-injection/) design patterns were applied, along with the [apollo server](https://www.apollographql.com/docs/apollo-server/) and [dynamoose](https://dynamoosejs.com/getting_started/Introduction) libraries.

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying graphql-dynamodb to stage dev (us-east-1)

✔ Service deployed to stack graphql-dynamodb-dev (149s)

endpoint: ANY - https://vhe780ahdb.execute-api.us-east-1.amazonaws.com/dev/graphql
functions:
  graphql: graphql-dynamodb-dev-graphql (25 MB)

```

### Invocation

After successful deployment, you can acess the deployed function by using the following command:

```bash
serverless offline
```

Which should result in response similar to the following:

```bash
Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * graphql: graphql-dynamodb-dev-graphql

   ┌───────────────────────────────────────────────────────────────────────────┐
   │                                                                           │
   │   ANY | http://localhost:3000/dev/graphql                                 │
   │   POST | http://localhost:3000/2015-03-31/functions/graphql/invocations   │
   │                                                                           │
   └───────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀
```

### Local development

You can access [http://localhost:3000/dev/graphql](http://localhost:3000/dev/graphql) to see the apollo server.
