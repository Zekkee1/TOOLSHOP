
describe('Testes Funcionais do Carrinho de Compras', () => {
    it('Deve inserir item ao carrinho de compras', () => {
        cy.adicionar_item('Combination Pliers')
        cy.contains('Combination Pliers').should('be.visible')
    });
    it('Deve remover o item do carrinho de compras', () => {
        cy.adicionar_item('Combination Pliers')
        cy.get('.btn.btn-danger').click()
        cy.contains('Combination Pliers').should('not.exist')
    })
    it('Deve alterar a quantidade de um item no carrinho', () => {
        cy.adicionar_item('Combination Pliers');
        cy.get('[data-test="product-quantity"]').clear().type('3{enter}');
        cy.wait(1500)
        cy.get('[data-test="product-quantity"]').should('have.value', '3');


    });

})  