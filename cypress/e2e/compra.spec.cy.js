
describe('Testes funcionais no fluxo de compra', () => {
    beforeEach(function () {
        cy.session('login-session', () => {
            cy.login_teste(this.usuario.email, this.usuario.password, true);
        });
    })

    it('Deve realizar a compra de um produto por transerencia bancaria', function () {
        const { bankName, accountName, accountNumber, } = this.usuario;
        cy.adicionar_item('Combination Pliers')
        cy.realizar_compra('bank', { bankName, accountName, accountNumber })
        cy.get('[data-test="finish"]').click()
        cy.get('.help-block').should('have.text', "Payment was successful")
    });

    it('Deve realizar a compra de um produto por cartao de credito', function () {
        const { cardNumber, expirationDate, cvv, cardHolderName } = this.usuario;
        cy.adicionar_item('Combination Pliers')
        cy.realizar_compra('credit', { cardNumber, expirationDate, cvv, cardHolderName })
        cy.get('[data-test="finish"]').click()
        cy.get('.help-block').should('have.text', "Payment was successful")

    });
})