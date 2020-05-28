const { gql } = require('apollo-server')

const typeDefs = gql`
  type JokeCategory {
    category: String
  }

  type RandomJoke {
    id: ID!
    value: String
    created_at: String
    updated_at: String
    icon: String
    categories: [JokeCategory]
  }

  type RandomCategoryJoke {
    id: ID!
    value: String
    created_at: String
    updated_at: String
    icon: String
    categories: [JokeCategory]
  }

  type SearchJoke {
    result: [RandomJoke]!
  }

  type Query {
     random_category(category: String): RandomCategoryJoke
     categories: [JokeCategory]!
     random_joke: RandomJoke
     search_joke(query: String): SearchJoke
   }
`;

module.exports = typeDefs
