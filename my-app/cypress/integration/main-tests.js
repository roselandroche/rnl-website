/// <reference types="cypress" />

describe("visits my deployed portfolio page", () => {
  beforeEach(() => {
    cy.visit("https://rlandroche.com");
  });

  it("loads the home page", () => {
    cy.url().should("include", "https://rlandroche.com");
    cy.contains("🇨🇦 Rose Landroche 🇺🇸");
    cy.contains(
      "Full Stack Web Developer | Passionate about Automated Testing"
    );
  });

  it("loads the history page", () => {
    // main history page
    cy.contains("History").click();
    cy.url().should("include", "/history");
    cy.contains("Jambaree | Web Developer");
    cy.contains("GrantMe | Junior Web Developer");
    cy.get(".resume").should(
      "have.attr",
      "href",
      "/static/media/Resume-RoseLandroche.abcbd8b5.pdf"
    );
    // education history page
    cy.contains("Education").click();
    cy.contains("Lambda School (now Bloom Institute of Technology)");
    cy.contains("Kingswood University (formerly Bethany Bible College)");
  });

  it("loads the projects page", () => {
    cy.contains("Projects").click();
    cy.contains("Professional History | Full Stack Developer");
    cy.contains("Conway’s Game of Life | Full Stack Developer");
    cy.get(".projCard > div > img");
  });

  it("loads the about page", () => {
    cy.contains("About").click();
    cy.contains("My go to tech:");
    cy.contains("Personal hobbies:");
  });
});
