const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3004',
    env: {
      BACKEND: 'http://localhost:3003',
      LOGGED_USER_KEY: 'loggedBlogListAppUser',
    },
  },
})
