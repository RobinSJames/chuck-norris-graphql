const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const JokeAPI = require('./datasources/jokes')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    jokeAPI: new JokeAPI()
  })
});

server.listen(({ port: process.env.PORT || 4000 })).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
