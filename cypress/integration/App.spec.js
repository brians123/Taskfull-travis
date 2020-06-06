describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("login button shows", () => {
    cy.visit("/");
    cy.contains("Sign in with Google");
  });

  it("login and see Add New Task button", () => {
    cy.visit("/");
    cy.contains("Sign in with Google").click();
    cy.get("[data-cy=feed]").should("contain", "Add New Task");
  });
});
