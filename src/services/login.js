import axios from 'axios'
const baseUrl = '/api/login'

const LOGGED_USER_KEY = 'loggedBlogAppUser'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)

  return response.data
}

export default { login, LOGGED_USER_KEY }
