describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="/chats/chat1"]').click();

    cy.url().should("include", "/chats/chat1");
  });
});
