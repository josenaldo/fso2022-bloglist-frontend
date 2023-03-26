const testUser = {
  name: 'Test User',
  username: 'testuser',
  password: 'sekret',
}

describe('Blog app', () => {
  beforeEach(function () {
    cy.request('POST', `${Cypress.env('BACKEND')}/api/testing/reset`)

    cy.request('POST', `${Cypress.env('BACKEND')}/api/users`, testUser)

    cy.visit('/')
  })

  describe('when open app', () => {
    it('App is shown', function () {
      cy.contains('Blog list')
      cy.contains('Login')
    })

    it('Login form is shown', function () {
      cy.contains('Login').click()

      cy.get('#username')
      cy.get('#password')
      cy.get('#login-button')
      cy.get('.cancel-button')
    })

    it('Login form can be hidden', () => {
      cy.contains('Login').click()
      cy.get('.cancel-button').click()
      cy.get('#username').should('not.exist')
      cy.get('#password').should('not.exist')
      cy.get('#login-button').should('not.exist')
      cy.get('.cancel-button').should('not.exist')
    })
  })

  describe('when try login', () => {
    it('succeeds with correct credentials', () => {
      cy.contains('Login').click()
      cy.get('#username').type(testUser.username)
      cy.get('#password').type(testUser.password)
      cy.get('#login-button').click()

      cy.contains(`Welcome ${testUser.name}!`)
      cy.contains('Logout')
    })

    it('fails with wrong credentials', () => {
      cy.contains('Login').click()
      cy.get('#username').type(testUser.username)
      cy.get('#password').type('wrongpassword')
      cy.get('#login-button').click()

      cy.contains('Login')
      cy.contains('Incorrect username or password. Please try again.')

      cy.get('.alert-error p').should('have.css', 'color', 'rgb(185, 56, 56)')
      cy.get('.alert-error').should(
        'have.css',
        'background-color',
        'rgb(255, 235, 238)'
      )
    })
  })
})
