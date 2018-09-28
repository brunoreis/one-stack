describe('The Generic Errors', () => {

  // beforeEach(() => {
  //   cy.server();
  //   cy.route({
  //     method: 'GET',
  //     url: '/error',
  //     response: {},
  //   })
  // });

  it(
    'should send generic message if server is down',
    () => {
      // cy.visit('/timeout');
    }
  );

  it(
    'should send generic message if database is down',
    () => {
      cy.visit('/users');
      cy.contains('Error');
    }
  );

});