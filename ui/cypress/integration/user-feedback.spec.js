/// <reference types="cypress" />
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum();

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('auto login with default user', () => {
    cy.contains('button', 'Login').should('be.visible').click();
    cy.url().should('include', '/feedback');
    cy.contains('Hello Lian!');
  });

  it('login with a different user', () => {
    cy.get('.anticon-user').should('be.visible').click();

    cy.get('.ant-dropdown-menu')
      .should('be.visible')
      .children()
      .eq(1)
      .contains('@')
      .then(function ($elem) {
        const name = $elem.text().slice(0, 3);
        cy.get($elem).click();
        cy.contains('button', 'Login').click();
        cy.contains(`Hello ${name}`);
      });
  });

  it('write a feedback and show in the table', () => {
    const fakeComment = lorem.generateWords(2);

    cy.contains('button', 'Login').should('be.visible').click();
    cy.url().should('include', '/feedback');
    cy.contains('mins on').should('not.be.exist');
    cy.contains('Select Game').should('be.visible').type('{enter}');
    cy.contains('mins on').should('be.visible');

    cy.contains('button', 'Submit').should('not.be.enabled');
    cy.get('textarea').type(fakeComment);
    cy.contains('button', 'Submit').should('be.enabled').click();
    cy.contains('You feedback is published! Thank you for comment!').should('be.visible');

    cy.get('.anticon-reload').should('be.visible').click();
    cy.get('.ant-table-wrapper').within(() => {
      cy.contains(fakeComment).should('be.visible');
    });
  });
});
