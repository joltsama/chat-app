describe("Render", () => {
  it("should render Users List", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/chats/chat1");

    cy.get('div[id="usersChatList"]').should("be.visible");
  });

  it("should show entered message", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/chats/chat1");

    cy.get('input[name="message"]').type("Testing message 1");

    cy.get('button[type="submit"]').click();

    cy.contains("Testing message 1");
  });

  it("should open thread window", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/chats/chat1");

    cy.get('input[name="message"]').type("Testing message 1");

    cy.get('button[type="submit"]').click();

    cy.contains("Testing message 1")
      .trigger("mouseover")
      .then(() => {
        cy.get(".thread-menu:not(.hidden)").click();
      });

    cy.get("#threadWindow").should("be.visible");
  });
});
