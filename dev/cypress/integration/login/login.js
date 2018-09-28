describe('The Login Page', () => {
  
  const user = {
    email: 'guido@email',
    password: 'senha',
  };
  
  beforeEach(() => {
    // resets and seeds db
    cy.exec('npm run db:reset && npm run db:seed');
  });

  it('should display error for non existing user', () => {
    // logging in with unexisting user
    cy.visit('/login');
    cy.get('input[name=email]').type('unknown');
    cy.get('input[name=password]').type('any{enter}');

    // should be on the same page
    cy.url().should('include', '/login');

    // should see error message
    cy.contains('invalid email or password');
  });

  it('should display error for wrong password', () => {
    // logging in with unexisting user
    cy.visit('/login');
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type('wrong{enter}');

    // should be on the same page
    cy.url().should('include', '/login');

    // should see error message
    cy.contains('invalid email or password');
  });

  it('should set cookie and redirect on success', () => {
    cy.visit('/login');

    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(`${user.password}{enter}`);

    cy.url().should('include', '/loggedUser');
    cy.getCookie('connect.sid').should('exist');
  });

  it('should display logged user only when logged in', () => {
    // see no logged user
    cy.visit('/loggedUser');
    cy.getCookie('connect.sid').should('not.exist');
    cy.contains('Not logged in');

    cy.visit('/login');
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(`${user.password}{enter}`);
    cy.contains('1 guido');
  });
});
