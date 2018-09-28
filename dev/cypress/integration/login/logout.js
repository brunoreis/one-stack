describe ('The logout page', () => {

  const user = {
    email: 'guido@email',
    password: 'senha',
  };

  beforeEach(() => {
    // resets and seeds db
    cy.exec('npm run db:reset && npm run db:seed');
    // logs in with valid user
    cy.request('POST', `${Cypress.env('appUrl')}/login`, user);
  });

  it('should logout', () => {
    // is logged in
    cy.getCookie('connect.sid').should('exist');
    cy.visit('/loggedUser');
    cy.contains('1 guido');
    // after logout, we should see no cookie or user
    cy.contains('Logout').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.getCookie('connect.sid').should('not.exist');
    cy.visit('/loggedUser');
    cy.contains('Not logged in');
  });
});
