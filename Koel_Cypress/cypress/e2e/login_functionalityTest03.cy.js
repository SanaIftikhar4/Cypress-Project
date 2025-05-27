import BasePage from "../PageObjects/BasePage";


const ln = new BasePage();

// Load test data synchronously from the fixture JSON file
const testData = require('../fixtures/LoginDataTest03.json');//statically importing the JSON fixture data before the tests run, at the time the file is loaded.

describe('Koel App - Login Test', () => {

  


    testData.forEach((user) => {
    it(`should verify login functionality - ${user.description}`, () => {
     
      cy.log(`Trying with ${user.description}`);  // Log the current test case description
      ln.login(user.email,user.password);
      if (user.expectedResult === 'pass') {
        ln.verifySuccessfulLogin();
      } else {
        ln.verifyLoginFailure();
      }
    });
  });
});