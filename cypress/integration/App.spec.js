describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("login button shows", () => {
    cy.visit("/");
    cy.contains("Sign in with Google");
  });

  it("click Add New Task button", () => {
    cy.visit("/");
    cy.get("[data-cy=addTask]").click();
    cy.get("[data-cy=dialogPopup]").should("contain", "Cancel");
  });
});
