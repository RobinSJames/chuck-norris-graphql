module.exports = {
  Query: {
    categories: (_, __, { dataSources }) =>
      dataSources.jokeAPI.getJokeCategories(),
    random_category: (_, { category }, { dataSources }) =>
      dataSources.jokeAPI.getJokeByCategory({ categoryName: category }),
    random_joke: (_, __, { dataSources }) =>
      dataSources.jokeAPI.getRandomJoke(),
    search_joke: (_, { query }, { dataSources }) =>
      dataSources.jokeAPI.searchJokeByQuery({ queryText: query })
  }
};