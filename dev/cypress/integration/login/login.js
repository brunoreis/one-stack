describe('The Login Page', () => {
  
  const user = {
    email: 'guidodutra@gmail.com',
    password: 'senha',
  };
  
  beforeEach(() => {
    // resets and seeds db
    // cy.exec('npm run db:reset');
  });

  it('should display error for non existing user', () => {
    // logging in with unexisting user
    cy.visit('/login');
    cy.get('input[name=email]').type('invalid');
    cy.get('input[name=password]').type('invalid');
    cy.get('button[name=login-button').click();

    // should be on the same page
    cy.url().should('include', '/login');

    // should see error message
    cy.contains('Email inválido');
  });

  it('should display error for wrong password', () => {
    // logging in with unexisting user
    cy.visit('/login');
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type('invalid');
    cy.get('button[name=login-button]').click();

    // should be on the same page
    cy.url().should('include', '/login');

    // should see error message
    cy.contains('Não há usuário com essas credenciais.');
  });

  it('should set cookie and redirect on success', () => {
    cy.visit('/login');

    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
    cy.get('button[name=login-button').click();
    cy.url().should('equal', `${Cypress.config().baseUrl}/profile`);
    cy.getCookie('connect.sid').should('exist');
    cy.contains(user.email);
  });
});
