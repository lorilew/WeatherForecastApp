describe('My First Test', () => {
  it('Check date loaded', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1')
      .contains('Weather Forecast')
  })
})