describe('Login command test', () => {
 beforeEach(() => {
    cy.visit('https://automationteststore.com');
    cy.login('Qetighlonti97', '123456');
  });

  it('მომხმარებლის დეტალებს შეცვლა - Edit account details', () => {
    cy.get('.side_account_list > :nth-child(3) > a').click();
    cy.get('#AccountFrm_firstname').should('be.visible').clear().type('ketiketi');
    cy.get('#AccountFrm_lastname').should('be.visible').clear().type('glonti');
    cy.get('.col-md-12 > .btn-orange').click();
    cy.contains('Success: Your account has been successfully updated.').should('exist');
    //შეამოწმეთ რომ შენახვის შემდეგ ცვლილებები აისახა.
    cy.get('.side_account_list > :nth-child(3) > a').click();
    cy.get('#AccountFrm_firstname').should('have.value', 'ketiketi');
    cy.get('#AccountFrm_lastname').should('have.value', 'glonti');
  });
});


describe ('არსებული მისამართის შეცვლა ', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
    cy.login('Qetighlonti97', '123456');
  });

  it('არსებული მისამართის შეცვლა', () => {
   cy.get('.nav-dash > :nth-child(3) > a > .fa').click();
   cy.get('tr > .pull-right > .btn').click();
   cy.get('#AddressFrm_address_1').clear().type('რუსთველის 1');
   cy.get('.col-md-12 > .btn-orange').click();
   cy.get('.contentpanel').should('be.visible');
  });
  
  it('ახალი მისამართის დამატება', () => {
   cy.get('.nav-dash > :nth-child(3) > a > .fa').click(); 
   cy.get('.col-md-12 > .btn-orange').click();
   cy.get('#AddressFrm_firstname').type ('qeti');
   cy.get('#AddressFrm_lastname').type ('glonti');
   cy.get('#AddressFrm_address_1').type ('შარტავას 4');
   cy.get('#AddressFrm_city').type ('Tbilisi');
   cy.get('#AddressFrm_zone_id').select('Bristol');
   cy.get('#AddressFrm_postcode').type ('444');
   cy.get('#AddressFrm_country_id').select ('United Kingdom');
   cy.get('.col-md-12 > .btn-orange').click();
cy.get('.contentpanel').should('be.visible');
})
})

describe.only('პაროლის შეცვლა', () => {
  beforeEach(() => {
    cy.login('Qetighlonti97', '123456'); 
  }); 


  it('შეცვალე პაროლი', () => {
     cy.get('.side_account_list > :nth-child(4) > a').click();
     cy.get('#PasswordFrm_current_password').type('123456');
     cy.get('#PasswordFrm_password').type ('12345');
     cy.get('#PasswordFrm_confirm').type ('12345');
     cy.get('.col-md-12 > .btn-orange').click ();
    cy.get('.alert.alert-success').should('be.visible')


    
   
  });
});