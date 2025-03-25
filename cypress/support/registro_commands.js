
Cypress.Commands.add('registro_teste',(first_name, last_name, birth, street, postal_code, city, state, country, phone, email, password)=>{
    cy.get('#first_name').type(first_name)
    cy.get('#last_name').type(last_name)
    cy.get('#dob').type(birth)
    cy.get('#street').type(street)
    cy.get('#postal_code').type(postal_code)
    cy.get('#city').type(city)
    cy.get('#state').type(state)
    cy.get('#country').select(country);
    cy.get('#phone').type(phone)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('.btnSubmit.mb-3').click()
    cy.wait(4000);
    
})
