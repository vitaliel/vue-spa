import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

axios.interceptors.request.use(function(config) {
  // when code will run on server side
  if (typeof window === 'undefined') {
    return config
  }

  const token = window.localStorage.getItem('token')

  if (token && token !== '') {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

const appService = {
  getPosts(categoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=12`)
      .then(res => {
        resolve(res.data)
      })
    })
  },
  getProfile() {
    return new Promise((resolve, reject) => {
      axios.get('/services/profile.php')
      .then(response => {
        resolve(response.data)
      }).catch(response => {
        reject(response.status)
      })
    })
  },
  login(credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/services/auth.php', credentials)
      .then(response => {
        resolve(response.data)
      }).catch(response => {
        console.log('error', response)
        reject(response.status)
      })
    })
  }
}

export default appService
