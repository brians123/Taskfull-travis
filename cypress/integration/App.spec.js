describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("login button shows", () => {
    cy.visit("/");
    cy.contains("Sign in with Google");
  });

  it("login and see Add New Task button", () => {
    cy.request("/home")
      .its("body")
      .should("include", "<title>TaskFull</title>");
  });
});
