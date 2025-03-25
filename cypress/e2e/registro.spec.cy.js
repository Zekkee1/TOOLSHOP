
describe('Testes Funcionais de cadastro', () => {
  beforeEach(()=>{
    cy.visit('auth/register')
     
  })
  it('Deve realizar o cadastro com sucesso', function ()  {
    //cria um email aleatório para testar a tela de registro.
    const email_Aleatorio = `usuario${Date.now()}@teste.com`
    //chama o commands "registro_teste" para localizar e inserir cada elemento
    
      cy.registro_teste(
        this.usuario.first_name,
        this.usuario.last_name,
        this.usuario.dob,
        this.usuario.street,
        this.usuario.postal_code,
        this.usuario.city,
        this.usuario.state,
        this.usuario.country,
        this.usuario.phone,
        email_Aleatorio,
        this.usuario.password)
    //valida se a url foi direcionada para a tela de login 
        cy.url().should('include','/auth/login')
    })
  
  it('Deve exibir erros de validação quando campos obrigatórios estão vazios',()=>{
    //clicando no botao register sem inserir os campos obrigatorios
    cy.get('.btnSubmit.mb-3').click()

    const errosEsperados = {
      'first-name-error': ' First name is required ',
      'last-name-error': ' fields.last-name.required ',
      'dob-error': ' Date of Birth is required ',
      'street-error': ' Street is required ',
      'postal_code-error': ' Postcode is required ',
      'city-error': ' City is required ',
      'state-error': ' State is required ',
      'country-error': ' Country is required ',
      'phone-error': ' Phone is required. ',
      'email-error': ' Email is required ',
      'password-error': ' Password is required ',
    };
    // Valida os erros de cada campo da aba registro
    Object.keys(errosEsperados).forEach((campo) => {
      cy.get(`div[data-test="${campo}"]>div`).first()
        .should('have.text', errosEsperados[campo]);
    });
  })
  
})