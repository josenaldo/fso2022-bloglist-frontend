describe('Blog app', () => {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3004')
  })

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
