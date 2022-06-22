import axios from 'axios'

// Create an Axios Instance
// baseURL - full URL of the server
const githubAxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8'
    // Authorization: 'Bearer '
  }
})

export default githubAxiosInstance
