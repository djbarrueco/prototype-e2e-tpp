module.exports = {
  getEmailInput: () => cy.get("#email"),
  getPasswordInput: () => cy.get("#password"),
  getLoginButton: () => cy.getBySel("button_acceder"),
};
