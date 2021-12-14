/// <reference types="cypress" />

describe("visits my deployed portfolio page", () => {
  beforeEach(() => {
    cy.visit("https://rlandroche.com");
  });

  it("loads the home page", () => {
    cy.contains("🇨🇦 Rose Landroche 🇺🇸");
    cy.contains(
      "Full Stack Web Developer | Passionate about Automated Testing"
    );
  });

  it("loads the history page", () => {
    cy.contains("History").click();
    cy.url().should("include", "/history");
    cy.contains("Jambaree | Web Developer");
    cy.contains("GrantMe | Junior Web Developer");
    cy.get("Resume - Updated Dec 2021").should(
      "have.attr",
      "href",
      "/static/media/Resume-RoseLandroche.abcbd8b5.pdf"
    );
  });
});
