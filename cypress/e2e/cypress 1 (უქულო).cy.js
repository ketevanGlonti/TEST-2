describe('Test Case 1:automationexercise registration', () => {
  it('Register User', () => {
 // 1-2. Launch browser and navigate to URL
    cy.visit('https://www.automationexercise.com')
// 3. Verify that home page is visible successfully
    cy.url().should('include', 'automationexercise')
    cy.get('body').should('be.visible')
 // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click()
 // 5. Verify 'New User Signup!' is visible
   cy.get('.signup-form > h2') .should ('have.text','New User Signup!')
// 6. Enter name and email address
    cy.get('[data-qa="signup-name"]') .type ("Ketighlonti") 
    cy.get('[data-qa="signup-email"]') .type ("ketighlonti6538@mail.com")
 // 7. Click 'Signup' button
   cy.get('[data-qa="signup-button"]') .click()
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
       //cy.contains('ENTER ACCOUNT INFORMATION').should ('be.visible')
// 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender2').check()
    cy.get('[data-qa="name"]')
    cy.get('[data-qa="email"]') 
    cy.get('[data-qa="password"]').type ('test123!')
    cy.get('[data-qa="days"]') .select ('27')
    cy.get('[data-qa="months"]') .select ('January')
    cy.get('[data-qa="years"]').select ('1997')
// 10-11. Select checkboxes
   cy.get('#newsletter') .check ()
   cy.get('#optin').check ()
// 12. Fill address details
   cy.get('[data-qa="first_name"]') .type ('keti')
   cy.get('[data-qa="last_name"]') .type ('ghlonti')
   cy.get('[data-qa="company"]').type ('testcompany')
   cy.get('[data-qa="address"]').type ('123 main st')
   cy.get('[data-qa="address2"]').type ('1234 main st')
   cy.get('[data-qa="country"]') .select ('Canada')
   cy.get('[data-qa="state"]').type ('ontorio')
   cy.get('[data-qa="city"]').type ('toronto')
   cy.get('[data-qa="zipcode"]').type ('test')
   cy.get('[data-qa="mobile_number"]') .type ('1234567890')
// 13. Click 'Create Account' button
cy.get('[data-qa="create-account"]').click ()
// 14. Verify that 'ACCOUNT CREATED!' is visible
   //cy.contains('ACCOUNT CREATED!').should('be.visible')
// 15. Click 'Continue' button
     cy.get('[data-qa="continue-button"]').click()
// 16. Verify that 'Logged in as username' is visible
     cy.contains('Ketighlonti').should('be.visible')
// 17. Click 'Delete Account' button
     cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.contains('Account Deleted!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    
  })
})
 
describe ('Test Case 2: Login User with correct email and password', () => {
  const email = 'qetighlonti97@gmail.com';
  const password = '111111';

  it('Logs in with valid credentials', () => { 
// 1-2. Launch browser and navigate to URL
    cy.visit('https://automationexercise.com');
// 3. Verify that home page is visible successfully
    cy.get('body').should('contain.text', 'Home');
// 4. Click on 'Signup / Login' button 
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
// 5. Verify 'Login to your account' is visible
    cy.contains('Login to your account').should('be.visible');
 // 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
// 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();
// 8. Verify that 'Logged in as username' is visible
   cy.contains('Logged in as').should('be.visible');
// 9. Click 'Delete Account' button
    cy.contains('Delete Account').click();
    cy.get('[data-qa="continue-button"]').click();
// 10. Verify that 'ACCOUNT DELETED!' is visible
   // cy.contains('ACCOUNT DELETED!', { timeout: 10000 }).should('be.visible');
  });
});

describe ('Test Case 3: Login User with incorrect email and password', () => {
  const invalidEmail = 'qetighlonti97@gmail.com';
  const invalidPassword = '111111';

  it('Shows error message when login with invalid credentials', () => {
 // 1-2. Launch browser and navigate to URL
    cy.visit('https://automationexercise.com');
 // 3. Verify that home page is visible successfully
    cy.url().should('include', 'automationexercise')
    cy.get('body').should('be.visible')
// 4. Click on 'Signup / Login'
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
// 5. Verify 'Login to your account' is visible
    cy.contains('Login to your account').should('be.visible');
// 6. Enter incorrect email and password
    cy.get('[data-qa="login-email"]').type(invalidEmail);
    cy.get('[data-qa="login-password"]').type(invalidPassword);
// 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();
// 8. Verify error message is visible
    cy.contains('Your email or password is incorrect!', { timeout: 5000 }).should('be.visible');
  });
});

describe ('Test Case 4: Logout User', () => {
  const email = 'qetighlonti97@gmail.com';
  const password = '111111';
 it('Logs in and then logs out the user', () => {
// 1-2. Launch browser and navigate to URL
    cy.visit('https://automationexercise.com');
 // 3. Verify that home page is visible successfully
    cy.url().should('include', 'automationexercise')
    cy.get('body').should('be.visible')
// 4. Click on 'Signup / Login'
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
// 5. Verify 'Login to your account' is visible
    cy.contains('Login to your account').should('be.visible');
// 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
// 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();
// 8. Verify that 'Logged in as username' is visible
    cy.contains('Logged in as').should('be.visible');
// 9. Click 'Logout' button
    cy.contains('Logout').click();
 // 10. Verify that user is navigated to login page
    cy.url().should('include', '/login');
    cy.contains('Login to your account').should('be.visible');
  });
});

describe.only('Test Case 5: Register User with existing email', () => {
  const existingEmail = 'qetighlonti97@gmail.com'; 
  const name = 'Keti';

  it('Should show error when registering with existing email', () => {
// 1-2. Launch browser and navigate to URL
    cy.visit('https://automationexercise.com');
 // 3. Verify that home page is visible successfully
    cy.url().should('include', 'automationexercise')
    cy.get('body').should('be.visible')
// 4. Click on 'Signup / Login'
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
// 5. Verify 'New User Signup!' is visible
    cy.contains('New User Signup!').should('be.visible');
// 6. Enter name and already registered email address
    cy.get('[data-qa="signup-name"]').type('Keti');
    cy.get('[data-qa="signup-email"]').type('qetighlonti97@gmail.com'); 
// 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();
// 8. Verify error 'Email Address already exist!' is visible
    cy.contains('Email Address already exist!').should('be.visible');

    
  });
});