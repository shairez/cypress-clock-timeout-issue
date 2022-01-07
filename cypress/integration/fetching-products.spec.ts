describe('fetching products', () => {
  
  it('should fetch products and use fake timers', () => {
    
    cy.visit('/');
    cy.clock();
    cy.findByText('Fetch products').click();
    cy.findByText('fetched').should('exist');
    cy.findByText(/You pressed/).should('exist');
    cy.tick(6000);
    cy.findByText(/You pressed/).should('not.exist');
    
  })
})