describe('Testing tabs', () => {
  it('Change for scratchpad tab', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='scratchpad']").click()
    cy.contains('# Scratchpad')
  })
  it('Change for trash tab', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='trash']").click()
    cy.get("[data-testid='trash']").should('have.class', 'active')
  })
  it('Change for favorites', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='trash']").click()
    cy.get("[data-testid='favorites']").should('have.class', 'active')
  })
  it('Change for scratchpad', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='trash']").click()
    cy.get("[data-testid='scratchpad']").should('have.class', 'active')
  })
})
