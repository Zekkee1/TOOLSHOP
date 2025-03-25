
describe('Testes Funcionais do Login', () => {
  beforeEach(() => {
    cy.visit('auth/login')

  })

  it('Deve efetuar o login na aplicação', function () {
    cy.login_teste(this.usuario.email, this.usuario.password)
    cy.url().should('include', '/account')

  });
  it('Deve exibir erro de email invalido quando inserir email inválido ou vazio', function () {
    cy.login_teste(" ", this.usuario.password)
    cy.get('#email-error>div').should('have.text', 'Email is required')
    cy.login_teste("email invalido", this.usuario.password)
    cy.get('#email-error>div').should('have.text', 'Email format is invalid')

  });
  it('Deve exibir erro de senha invalida quando inserir uma senha invalida ou vazia', function () {
    cy.login_teste(this.usuario.email, " ")
    cy.get('#password-error>div').should('be.visible', 'Password length is invalid')
    cy.login_teste(this.usuario.email, "senha invalida")
    cy.get('[data-test="login-error"]').should('be.visible', 'Invalid email or password')

  })

})