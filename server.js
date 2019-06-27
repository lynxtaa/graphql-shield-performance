const { GraphQLServer } = require('graphql-yoga')
const { rule, shield } = require('graphql-shield')

const typeDefs = `
  type Query {
    users: [User!]!
  }

  type Mutation {
    createSomething: Boolean!
  }

  type User {
    id: Int!
    col1: Int
    col2: Int
    col3: Int
    col4: Int
    col5: Int
    col6: Int
    col7: Int
    col8: Int
    col9: Int
    col10: Int
    col11: Int
    col12: Int
    col13: Int
    col14: Int
    col15: Int
  }
`

const users = new Array(1000).fill(null).map((item, id) => ({
	id,
	col1: id,
	col2: id,
	col3: id,
	col4: id,
	col5: id,
	col6: id,
	col7: id,
	col8: id,
	col9: id,
	col10: id,
	col11: id,
	col12: id,
	col13: id,
	col14: id,
	col15: id,
}))

const resolvers = {
	Query: {
		users: () => Promise.resolve(users),
	},
}

const isAuthenticated = rule()((parent, args, ctx, info) => ctx.user !== null)

const permissions = shield({
	Mutation: {
		createSomething: isAuthenticated,
	},
})

const server = new GraphQLServer({
	typeDefs,
  resolvers,
  // Comment this line to test without graphql-shield
	middlewares: [permissions],
	context: req => req,
})

/*
Test with this query:
{
  users {
    id
    col1
    col2
    col3
    col4
    col5
    col6
    col7
    col8
    col9
    col10
    col11
    col12
    col13
    col14
    col15
  }
}
*/

server.start(() => console.log('Server is running on http://localhost:4000'))
