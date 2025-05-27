class Login{

//Locators:

    userEmailInput = "input[type='email']";
    passwordInput = "input[type='password']";
    loginButton = "button[type='submit']";
    registrationForgotPasswordLink = "a[href='registration']";
    positiveTestAssertion = "span.name";
    negativeTestAssertion = "a[href='registration']";

// Action methods:

visit(url){
    cy.visit(url);
    cy.get(this.userEmailInput, { timeout: 10000 })
    .should("be.visible");
}

enterEmail(email){
    cy.get(this.userEmailInput, { timeout: 5000 })
    .should("be.visible")
    .and("not.be.disabled")
    .clear()
    .type(email);
}

enterPassword(password){
    cy.get(this.passwordInput, { timeout: 5000 })
    .should("be.visible")
    .and("not.be.disabled")
    .clear()
    .type(password);
}

clickLogin(){
    cy.get(this.loginButton).click();
}

// login(email,password){
//     this.enterEmail(email);
//     this.enterPassword(password);
//     this.clickLogin();
// }

//Combined login function with conditional input typing
//I did this because with empty input the test was getting failed bcuz it was expecting something in the input fields
    login(email, password) {
        if (email !== "") {// now it will skip if there is no value in the json
        this.enterEmail(email);
        }
        if (password !== "") {// now it will skip if there is no value in the json
        this.enterPassword(password);
        }
        this.clickLogin();
    }



verifySuccessfulLogin(){
    cy.get(this.positiveTestAssertion)
    .should("be.visible")
    .and("have.text","Sana Iftikhar")
}
verifyLoginFailure() {
    cy.wait(5000)
    // Assert that the positive element (dashboard) does NOT exist or is NOT visible
    cy.get(this.positiveTestAssertion).should('not.exist');
    
    // Assert that the negative element (like login or error message) IS visible
    //cy.get(this.negativeTestAssertion).should('be.visible');
  }
}
export default Login;