/// <reference types="Cypress" />

import { LoginData } from "../pages/login/login.data";
import { LoginPage } from "../pages/login/loginPage";

describe("Login page", () => {
  it("should login standard user", () => {
    const username = LoginData.standardUser.username;
    const password = LoginData.standardUser.password;
    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLoginButton();
    cy.get(".title").should("exist");
    cy.get(".title").should("have.text", "Products");
  });

  it("should not login with wrong username", () => {});

  it("should not login with wrong password", () => {});

  it("should not login locked out user", () => {});
});
