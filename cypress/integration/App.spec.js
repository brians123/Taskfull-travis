describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("login button shows", () => {
    cy.visit("/");
    cy.contains("Sign in with Google");
  });
});
