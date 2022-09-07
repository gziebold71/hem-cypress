const addContext = require('mochawesome/addContext');

Given('I open the HEM page', () => {
    cy.visit('/');
    cy.reportLog("This is Subject");
    cy.reportLogKV("This is key!","This is value!");
});


