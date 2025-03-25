Cypress.Commands.add('realizar_compra', (paymentType, paymentData) => {
    cy.get(`[data-test="proceed-1"]`).click()
    cy.get(`[data-test="proceed-2"]`).click()
    cy.get(`[data-test="proceed-3"]`).click()
    cy.wait(1500)
    if (paymentType === 'bank') {
        cy.bank_transfer(paymentData.bankName, paymentData.accountName, paymentData.accountNumber);
    } else if (paymentType === 'credit') {
        cy.credit_card(paymentData.cardNumber, paymentData.expirationDate, paymentData.cvv, paymentData.cardHolderName);
    }

});


Cypress.Commands.add('bank_transfer', (bankName, accountName, accountNumber) => {
    cy.get('select').select('Bank Transfer')
    cy.get('[data-test="bank_name"]').type(bankName)
    cy.get('[data-test="account_name"]').type(accountName)
    cy.get('[data-test="account_number"]').type(accountNumber)
})
Cypress.Commands.add('credit_card', (cardNumber, expirationDate, cvv, cardHolderName) => {
    cy.get('select').select('Credit Card')
    cy.get('[data-test="credit_card_number"]').type(cardNumber)
    cy.get('[data-test="expiration_date"]').type(expirationDate)
    cy.get('[data-test="cvv"]').type(cvv)
    cy.get('[data-test="card_holder_name"]').type(cardHolderName)
})