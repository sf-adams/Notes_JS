// cypress/integration/my-app.spec.js

describe('Header', () => {
  it('should correctly navigate through the links', () => {
    // Visit the homepage
    cy.visit('/');

    cy.get("[data-cy='products']").click()

    cy.url().should("include", "/products")
  });

    // Test to check the correct titles
    // cy.title().should("")

    // cy.get('.header__link').each(($link, index) => {
    //   const expectedLink = links[index];
    //   cy.wrap($link).should('have.attr', 'load', expectedLink.path);
    //   cy.wrap($link).should('have.text', expectedLink.name);
    // });
});
