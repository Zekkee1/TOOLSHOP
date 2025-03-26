
Cypress.Commands.add('login_teste', (email, senha, withWait = false) => {
  cy.visit('/auth/login')
  cy.get('#email').clear().type(email);
  cy.get('#password').clear().type(senha);
  cy.get('.btnSubmit').click();
  if(withWait){
    cy.wait(3000)
  }

  // Verifica se a mensagem de erro de login invalido aparece.
  cy.get('body').then(($body) => {
    const errorElement = $body.find('.help-block');
    //se a aparecer a mensagem de erro, significa que o usuario nao existe, então será necessario criar outro.
    if (errorElement.length > 0 && errorElement.text().includes('Invalid email or password')) {
      cy.visit('/auth/register')
      cy.fixture('usuario').then((usuario) => {
        cy.registro_teste(
          usuario.first_name,
          usuario.last_name,
          usuario.dob,
          usuario.street,
          usuario.postal_code,
          usuario.city,
          usuario.state,
          usuario.country,
          usuario.phone,
          usuario.email,
          usuario.password
        );
        // Após registrar, tenta logar novamente.
        cy.login_teste(usuario.email, usuario.password);
      });
    }

  });
});  
