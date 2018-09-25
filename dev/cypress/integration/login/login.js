describe('The Login Page', () => {
  
  const user = {
    name: 'guido',
    password: 'senha',
  };
  
  beforeEach(() => {
    // resets and seeds db
    cy.exec('npm run db:reset && npm run db:seed');
  });

  it('should display error for non existing user', () => {
    // logging in with unexisting user
    cy.visit('/login');
    cy.get('input[name=username]').type('unknown');
    cy.get('input[name=password]').type('any{enter}');

    // should be on the same page
    cy.url().should('include', '/login');

    // should see error message
    cy.contains('invalid username or password');
  });

  it('should display error for wrong password', () => {
    // logging in with unexisting user
    cy.visit('/login');
    cy.get('input[name=username]').type(user.name);
    cy.get('input[name=password]').type('wrong{enter}');

    // should be on the same page
    cy.url().should('include', '/login');

    // should see error message
    cy.contains('invalid username or password');
  });

  it('should change cookie and loggedUser according to login', () => {
    const user = {
      username: 'guido',
      password: 'senha',
    };
    const { username, password } = user;

    // see no logged user
    cy.visit('/loggedUser');
    cy.getCookie('connect.sid').should('not.exist');
    cy.contains('Not logged in');

    cy.visit('/login');

    cy.get('input[name=username]').type(username);

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`);

    // we should be redirected to /loggedUser
    cy.url().should('include', '/loggedUser');
    cy.getCookie('connect.sid').should('exist');
    cy.contains('Not logged in').should('not.exist');

    // after logout, we should see no cookie or user
    cy.contains('Logout').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.getCookie('connect.sid').should('not.exist');
    cy.visit('/loggedUser');
    cy.contains('Not logged in');
  });
});
