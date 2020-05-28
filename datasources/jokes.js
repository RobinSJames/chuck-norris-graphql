const { RESTDataSource } = require('apollo-datasource-rest');

class JokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  async getJokeCategories() {
    const response = await this.get('categories')
    console.log(response)
    const arr = []
    response.forEach(element => {
      const obj = {
        category: element
      }
      arr.push(obj)
    })
    return arr
  }

  async getJokeByCategory({ categoryName }) {
    const response = await this.get(`random?category=${categoryName}`)
    return response
  }

  async getRandomJoke() {
    const response = await this.get('random')
    return response
  }

  async searchJokeByQuery({ queryText }) {
    // queryText = 'game'
    const response = await this.get(`search?query=${queryText}`)
    return response
  }
}

module.exports = JokeAPI;