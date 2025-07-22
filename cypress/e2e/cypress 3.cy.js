describe ('Test Case 1: Register User', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData');
    });

    it('Registers new user successfully', function () {
        cy.registerUser(this.userData);
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.contains('Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    });
});

describe('Test Case 2: Login User with correct email and password', () => {
    const email = 'qetighlonti99@gmail.com';
    const password = '123456';

    it('Logs in successfully', () => {
        cy.loginUser(email, password);
        cy.contains('Logged in as').should('be.visible');
        cy.contains('Delete Account').click();
        cy.contains('Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    });
});

describe('Test Case 3: Login User with incorrect email and password', () => {
    it('Shows error for invalid login', () => {
        cy.loginUser('invalid@email.com', '123456');
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});