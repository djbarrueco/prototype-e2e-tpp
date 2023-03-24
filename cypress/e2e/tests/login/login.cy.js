const login = require("../../../pageObjects/login");

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("passes", () => {
    cy.fixture("credentials").then((credential) => {
      login.getEmailInput().clear().type(credential.email);
      login.getPasswordInput().clear().type(credential.password);
      login.getLoginButton().click();
      cy.location("pathname").should("eq", "/home");
    });
  });
});
