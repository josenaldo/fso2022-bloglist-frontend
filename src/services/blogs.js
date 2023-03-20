import axios from 'axios'

/**
 * The base URL for the API.
 * @constant {string}
 */
const baseUrl = '/api/blogs'

/**
 * The token to authenticate requests.
 * @type {string}
 */
let token = null

/**
 * Sets the token for authentication.
 * @function
 * @param {string} newToken - The new token to be set for authentication.
 */
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

/**
 * Retrieves all the blogs.
 * @function
 * @async
 * @returns {Promise<Array>} A promise that resolves to an array of all the blogs.
 */
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

/**
 * Creates a new blog.
 * @function
 * @async
 * @param {Object} blog - The blog object to be created.
 * @returns {Promise<Object>} A promise that resolves to the new blog object.
 */
const create = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, blog, config)

  return response.data
}

const like = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }
  const likedBlog = { ...blog, user: blog.user.id, likes: blog.likes + 1 }
  const response = await axios.put(`${baseUrl}/${blog.id}`, likedBlog, config)

  console.log('response', response)
  return response.data
}

export default { setToken, getAll, create, like }
