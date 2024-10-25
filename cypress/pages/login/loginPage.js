/// <reference types="Cypress" />

import { LoginElements } from "./login.elements";

export class LoginPage {
  static visit() {
    const page = Cypress.env("base_url");
    cy.visit(page);
  }

  static enterUsername(user) {
    const field = LoginElements.fields.username;
    field.clear();
    field.type(user);
  }

  static enterPassword(password) {
    const field = LoginElements.fields.password;
    field.clear();
    field.type(password);
  }

  static clickLoginButton() {
    LoginElements.buttons.login.click();
  }
}
