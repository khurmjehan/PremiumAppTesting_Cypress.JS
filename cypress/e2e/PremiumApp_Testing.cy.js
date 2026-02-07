/// <reference types="cypress" />

/// <reference types="cypress" />
require('@cypress/xpath');

describe('Premium App Testing', () => {

  it('Full flow: Sign Up, Add Inventory, Request Test Drive, Get Financing', () => {

    // Visit the site
    cy.visit('https://green-flamingo-854862.hostingersite.com/');

    // Click Sign In (force if hidden)
    cy.xpath("//a[normalize-space()='Sign In']").click({ force: true });

    // Click "create a new account"
    cy.xpath("//a[normalize-space()='create a new account']").click({ force: true });

    // Fill registration form
    cy.get('#name').scrollIntoView().clear({ force: true }).type('Khurram Jehangiri', { force: true });
    cy.get('#email-address').scrollIntoView().clear({ force: true }).type('k.jehangiri315@gmail.com', { force: true });
    cy.get('#password').scrollIntoView().clear({ force: true }).type('Welcome123', { force: true });
    cy.xpath("//button[@type='submit']").click({ force: true });

    // Navigate to New Cars
    cy.xpath("//a[text()='New Cars']").click({ force: true });

    // Wait for any toast/overlay to disappear
    cy.get("li[data-state='open']", { timeout: 15000 }).should('not.exist');

    // Click "Add Inventory"
    cy.xpath("//button[contains(.,'Add Inventory')]").click({ force: true });

    // Fill Car Details
    cy.get('#make').scrollIntoView().clear({ force: true }).type('Tesla', { force: true });
    cy.get('#model').scrollIntoView().clear({ force: true }).type('Model Y', { force: true });
    cy.get('#year').scrollIntoView().clear({ force: true }).type('2026', { force: true });
    cy.get('#price').scrollIntoView().clear({ force: true }).type('59130', { force: true });
    cy.get('#mileage').scrollIntoView().clear({ force: true }).type('53', { force: true });

    // Dropdown: EV
    cy.xpath("//div[6]//button[1]//*[name()='svg']").click({ force: true });
    cy.xpath("//div[@role='option' and normalize-space()='EV']").click({ force: true });

    // Dropdown: New
    cy.xpath("//div[7]//button[1]//*[name()='svg']").click({ force: true });
    cy.xpath("//div[@role='option' and normalize-space()='New']").click({ force: true });

    // Color
    cy.get('#color').scrollIntoView().clear({ force: true }).type('Carbon Black Metallic', { force: true });

    // Transmission dropdown: Automatic
    cy.xpath("//div[9]//button[1]//*[name()='svg']").click({ force: true });
    cy.xpath("//div[@role='option' and normalize-space()='Automatic']").click({ force: true });

    // Fuel dropdown: Electric
    cy.xpath("//div[10]//button[1]//*[name()='svg']").click({ force: true });
    cy.xpath("//div[@role='option' and normalize-space()='Electric']").click({ force: true });

    // Image and Description
    cy.get('#image').scrollIntoView().clear({ force: true }).type('https://www.tesla.com/modely/design?utm_source=chatgpt.com', { force: true });
    cy.get('#description').scrollIntoView().clear({ force: true }).type(
      'The 2026 Tesla Model Y ("Juniper" refresh) is a heavily updated, all-electric midsize SUV featuring a sleeker, more aerodynamic design with new wraparound LED lighting, improved cabin materials, and reduced noise. It offers roughly 305–357 miles of range, a 15.4-inch touchscreen, and a 3.3-second 0-60 mph time for the performance variant.', 
      { force: true }
    );

    cy.xpath("//button[@type='submit']").click({ force: true });

    // Select Carbon Black Metallic car
    cy.xpath("//div[normalize-space()='Carbon Black Metallic']").click({ force: true });

    // Request a Test Drive
    cy.xpath("//button[text()='Request a Test Drive']").click({ force: true });

    // Wait for overlay to disappear
    cy.get('div.grid.gap-1', { timeout: 15000 }).should('not.exist');

    // Click "Get Financing Info" safely
    cy.xpath("//button[normalize-space()='Get Financing Info']")
      .scrollIntoView()
      .click({ force: true });

    // Fill Pre-Approved Form
    cy.get('#name').scrollIntoView().clear({ force: true }).type('Khurram Jehangiri', { force: true });
    cy.get('#email').scrollIntoView().clear({ force: true }).type('k.jehangiri315@gmail.com', { force: true });
    cy.get('#phone').scrollIntoView().clear({ force: true }).type('(703)703-7033', { force: true });
    cy.get('#income').scrollIntoView().clear({ force: true }).type('125000', { force: true });

    // Navigate back to New Cars
    cy.xpath("//a[text()='New Cars']").click({ force: true });

    // Search for Tesla
    cy.xpath("//input[contains(@placeholder,'Search by make')]")
      .scrollIntoView()
      .clear({ force: true })
      .type('Tesla{enter}', { force: true });

  });

});

