export class LoginElements {
  static get fields() {
    return {
      get username() {
        return cy.get("#user-name");
      },
      get password() {
        return cy.get("#password");
      },
    };
  }

  static get buttons() {
    return {
      get login() {
        return cy.get("#login-button");
      },
    };
  }
}
