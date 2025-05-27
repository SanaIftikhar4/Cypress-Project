
    export default class BasePage {

        //Login Page Elements
        userEmailInput = "input[type='email']";
        passwordInput = "input[type='password']";
        loginButton = "button[type='submit']";
        registrationForgotPasswordLink = "a[href='registration']";
        negativeTestAssertion = "a[href='registration']";

        //Home Page Elements:
        positiveTestAssertion = "span.name";
        
        /* 
        */


        getElement(locator) {
          return cy.get(locator); //cy.get(this.userEmailInput, { timeout: 5000 })
        }
        
        typeInto(locator, text) {
            if (text !== "") {
              this.getElement(locator).should("be.visible").clear().type(text);// combining getElement with Actions need to perform on that locator
            }
        }
        
        clickElement(locator) {
          this.getElement(locator).click();
        }
      
        login(email, password) {
            cy.visit('/'); //  ensures you're on the login page
          this.typeInto(this.userEmailInput, email);
          this.typeInto(this.passwordInput, password);
          this.clickElement(this.loginButton); 
           // Wait and check for success element presence
        }
        

        verifySuccessfulLogin(){
            cy.wait(5000)
            cy.get(this.positiveTestAssertion,
              { timeout: 10000 })
              .should('be.visible')
        }
        verifyLoginFailure() {
            cy.wait(5000)
            cy.get(this.positiveTestAssertion,
                { timeout: 10000 })
                .should('not.exist');
        }    
      }
