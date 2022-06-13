describe('Notes and searching', () => {
  it('Create note and search for it', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='sidebar-action-create-new-note']").click()
    cy.get('pre').type('testnote')
    cy.get("[data-testid='note-search']").type('testnote')
    cy.get("[data-testid='note-list-item-0']").contains('testnote')
  })
  it('Create note and delete it', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='sidebar-action-create-new-note']").click()
    cy.get('pre').type('testnote')
    cy.get('*[class^="note-menu-bar-button trash"]').click()

    cy.get("[data-testid='note-list']").children().should('have.length', 1)
  })
  it('Create note with shortcut', () => {
    cy.visit('http://localhost:3000/app')
    cy.get('body').type('{ctrl}{alt}N}')
    cy.get('pre').type('testnote')
    cy.get("[data-testid='note-list-item-0']").contains('testnote')
  })
  it('Create notes and edit one of them', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='sidebar-action-create-new-note']").click()
    cy.get('pre').type('testnote')
    cy.get("[data-testid='sidebar-action-create-new-note']").click()
    cy.get('pre').type('anothertestnote')
    cy.get("[data-testid='note-list-item-1']").click()
    cy.get('pre').type(' new stuff')
    cy.get('pre').contains('new stuff')
  })
})
