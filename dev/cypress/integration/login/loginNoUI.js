describe('The loggedUser Page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset');
  });

  it('logs in programmatically without using the UI', () => {
    const user = {
      email: 'guidodutra@gmail.com',
      password: 'senha',
    };

    // programmatically log us in without needing the UI
    cy.request(
      'POST',
      `${Cypress.env('appUrl')}/login`,
      user
    );

    // our auth cookie should be present
    cy.getCookie('connect.sid').should('exist');

    // now that we're logged in, we can visit
    // any kind of restricted route!
    cy.visit('/loggedUser');
  });
});
