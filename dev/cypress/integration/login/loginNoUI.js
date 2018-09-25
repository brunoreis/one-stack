describe('The loggedUser Page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed');
  });

  it('logs in programmatically without using the UI', () => {
    const user = {
      username: 'guido',
      password: 'senha',
    };
    const { username, password } = user;

    // programmatically log us in without needing the UI
    cy.request('POST', `${Cypress.env('appUrl')}/login`, {
      username,
      password,
    });

    // our auth cookie should be present
    cy.getCookie('connect.sid').should('exist');

    // now that we're logged in, we can visit
    // any kind of restricted route!
    cy.visit('/loggedUser');
  });
});
