import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService = {
  getPosts(categoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=12`)
      .then(res => {
        resolve(res.data)
      })
    })
  }
}

export default appService
