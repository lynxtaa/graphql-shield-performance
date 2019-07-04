const { GraphQLServer } = require('graphql-yoga')
const { shield } = require('graphql-shield')
const schema = require('./schema')

const server = new GraphQLServer({ schema, middlewares: [shield({})] })

server.start(() => console.log('Server is running on http://localhost:4000'))
