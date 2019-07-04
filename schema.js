const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type Query {
    users: [User!]!
  }

  type User {
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
  }
`

const users = new Array(1000).fill(null).map((item, id) => ({
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
}))

const resolvers = {
	Query: {
		users: () => Promise.resolve(users),
	},
}

module.exports = makeExecutableSchema({
	typeDefs,
	resolvers,
})
