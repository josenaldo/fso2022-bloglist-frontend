Cypress.Commands.add('resetDatabase', () => {
  cy.request('POST', `${Cypress.env('BACKEND')}/api/testing/reset`)
})

Cypress.Commands.add('addUser', (user) => {
  cy.request('POST', `${Cypress.env('BACKEND')}/api/users`, user)
})

Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', `${Cypress.env('BACKEND')}/api/login`, {
    username: username,
    password: password,
  }).then((response) => {
    localStorage.setItem(
      Cypress.env('LOGGED_USER_KEY'),
      JSON.stringify(response.body)
    )
    cy.visit('/')
  })
})

Cypress.Commands.add('createBlog', ({ title, author, url }) => {
  const user = localStorage.getItem(Cypress.env('LOGGED_USER_KEY'))
  const token = JSON.parse(user).token

  cy.request({
    method: 'POST',
    url: `${Cypress.env('BACKEND')}/api/blogs`,
    body: { title, author, url },
    headers: {
      Authorization: `bearer ${token}`,
    },
  })

  cy.visit('/')
})
