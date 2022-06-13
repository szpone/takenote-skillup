describe('Categories management', () => {
  it('Adds category', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='add-category-button']").click()
    cy.get("[data-testid='new-category-form']").type('test category')
    cy.get("[data-testid='trash']").click()
    cy.get("[data-testid='category-list-div']").should('have.length', 1)
  })
})
