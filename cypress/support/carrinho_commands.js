
Cypress.Commands.add('adicionar_item', (item) => {
    cy.visit('/')
    cy.get('.card-body').find('.card-title').filter((index, el) => Cypress.$(el).text().trim() === item).click();
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="nav-cart"]').click({ force: true })

})




