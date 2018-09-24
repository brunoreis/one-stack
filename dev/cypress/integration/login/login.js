describe('The Login Page', () => {
  beforeEach(() => {
    // resets and seeds db
    cy.exec('npm run db:reset && npm run db:seed');
  });

  it('should redirect to /loggedUser after logging in with seeded user', () => {
    const user = {
      username: 'guido',
      password: 'senha',
    };
    const { username, password } = user;

    cy.visit('/login');

    cy.get('input[name=username]').type(username);

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`);

    // we should be redirected to /loggedUser
    cy.url().should('include', '/loggedUser');

    // // our auth cookie should be present
    // cy.getCookie('connect.sid').should('exist');

    // // UI should reflect this user being logged in
    // cy.get('h1').should('contain', 'jane.lane');
  });
});
