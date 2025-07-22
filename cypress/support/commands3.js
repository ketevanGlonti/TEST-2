Cypress.Commands.add('registerUser', (user) => {
    cy.visit('https://automationexercise.com');
    cy.get('a[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender2', { timeout: 10000 }).should('be.visible').check();
    cy.pause
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select(user.day);
    cy.get('[data-qa="months"]').select(user.month);
    cy.get('[data-qa="years"]').select(user.year);

    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('[data-qa="first_name"]').type(user.first_name);
    cy.get('[data-qa="last_name"]').type(user.last_name);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address1);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);

    cy.get('[data-qa="create-account"]').click();
    cy.url({ timeout: 10000 }).should('include', '/account_created');
    cy.get('[data-qa="continue-button"]').click();
    cy.contains(`Logged in as ${user.name}`).should('be.visible');
});

Cypress.Commands.add('loginUser', (email, password) => {
    cy.visit('https://automationexercise.com');
    cy.get('a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
});
