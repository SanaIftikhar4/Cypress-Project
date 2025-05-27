import Login from "../PageObjects/LoginPage";

const ln = new Login();

// Load test data synchronously from the fixture JSON file
const testData = require('../fixtures/LoginDataTest02.json');//statically importing the JSON fixture data before the tests run, at the time the file is loaded.

describe('Koel App - Login Test', () => {

    beforeEach(() => {//executes before each it block
        ln.visit(testData.validUser.url);
      });
  // Test for valid login using valid credentials from fixture
    it('should login with valid credentials', () => {
        
        ln.login(testData.validUser.email, testData.validUser.password);
        ln.verifySuccessfulLogin();
    });

    // Dynamically create a test for each invalid user scenario from fixture data
    testData.invalidUsers.forEach((user) => {
    it(`should fail login - ${user.description}`, () => {
     
      cy.log(`Trying with ${user.description}`);  // Log the current test case description
      ln.login(user.email, user.password);
      ln.verifyLoginFailure();
    });
  });

});
