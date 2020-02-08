/// <reference types="Cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('https://login.izettletest.com')
  })

  describe('visit transactions page', () => {
    it('.should() - make an assertion about the current subject', () => {
      
      cy.get('#email')
      .type('gb@izettle.com')
      
      cy.get('#submitBtn').click()
      
      cy.get('#password')
      .type('qwer1234')

      cy.get('#submitBtn').click()


    })

  })

})
