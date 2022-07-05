import { TestID } from '@resources/TestID'

describe('Categories management', () => {
  it('Should form be focused', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='add-category-button']").click()
    cy.get("[data-testid='new-category-label']").should('have.focus')
  })
  it('Adds category', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='add-category-button']").click()
    cy.get("[data-testid='new-category-label']").type('test category')
    cy.get("[data-testid='new-category-form']").submit()
    cy.get("[data-testid='category-list-div']").should('have.length', 1)
  })
  it('Context menu should be open', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='add-category-button']").click()
    cy.get("[data-testid='new-category-label']").type('test category')
    cy.get("[data-testid='new-category-form']").submit()
    cy.contains('test category').parent().rightclick()
    cy.get(`[data-testid=${TestID.CATEGORY_OPTIONS_NAV}]`).should('exist')
  })
  it('Deletes category', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='add-category-button']").click()
    cy.get("[data-testid='new-category-label']").type('test category')
    cy.get("[data-testid='new-category-form']").submit()
    cy.contains('test category').parent().rightclick()
    cy.get(`[data-testid=${TestID.CATEGORY_OPTION_DELETE_PERMANENTLY}]`).click()
    cy.get("[data-testid='category-list-div']").should('have.length', 0)
  })
  it('Create note in the category', () => {
    cy.visit('http://localhost:3000/app')
    cy.get("[data-testid='add-category-button']").click()
    cy.get("[data-testid='new-category-label']").type('test category')
    cy.get("[data-testid='new-category-form']").submit()
    cy.contains('test category').click()
    cy.get("[data-testid='sidebar-action-create-new-note']").click()
    cy.get('.CodeMirror textarea').type('categorytestnote', { force: true })
    cy.get("[data-testid='add-category-button']").click()
    cy.get("[data-testid='new-category-label']").type('anothercategory')
    cy.contains('test category').click()
    cy.get("[data-testid='note-list-item-0']").contains('categorytestnote')
  })
})
