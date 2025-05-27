import Login from "../PageObjects/LoginPage";


const ln = new Login();

describe('Koel App - Login Test', () => {

    

    it('should login with valid credentials', () => {
        
        cy.fixture("LoginDataTest01").then((data)=>{
            ln.visit(data.validUser.url);
            ln.login(data.validUser.email,data.validUser.password);

        //  Assertion to confirm login
        
            ln.verifySuccessfulLogin();
            
        })

    })
    it('should fail login with Invalid Email and Password', () => {
        
        cy.fixture("LoginData").then((data)=>{
            ln.visit(data.validUser.url);
            ln.login(data.invalidUsers.emailPassword.email,
                data.invalidUsers.emailPassword.password);

        //  Assertion to confirm login
            ln.verifyLoginFailure();
            

        })
   
    })
    it('should fail login with Invalid Email', () => {
        cy.fixture("LoginData").then((data)=>{
            ln.visit(data.validUser.url);
            ln.login(data.invalidUsers.Email.email,
                data.invalidUsers.Email.password);

        //  Assertion to confirm login
            ln.verifyLoginFailure();


        })
  
    })
    it('should fail login with Invalid Password', () => {
        cy.fixture("LoginData").then((data)=>{
            ln.visit(data.validUser.url);
            ln.login(data.invalidUsers.Password.email,
                data.invalidUsers.Password.password);

        //  Assertion to confirm login
            ln.verifyLoginFailure();

        })
   
    })

    it('should fail login with Empty Email ', () => {
        cy.fixture("LoginData").then((data)=>{
            ln.visit(data.validUser.url);
            ln.login(data.invalidUsers.emptyEmail.email,
                data.invalidUsers.emptyEmail.password);

        //  Assertion to confirm login
            ln.verifyLoginFailure();

        })
   
    })
    it('should fail login with Empty Password ', () => {
        cy.fixture("LoginData").then((data)=>{
            ln.visit(data.validUser.url);
            ln.login(data.invalidUsers.emptyPassword.email,
                data.invalidUsers.emptyPassword.password);

        //  Assertion to confirm login
            ln.verifyLoginFailure();

        })
   
    })
    it('should fail login with both fields empty ', () => {
        cy.fixture("LoginData").then((data)=>{
            ln.visit(data.validUser.url);
            ln.login(data.invalidUsers.emptyFields.email,
                data.invalidUsers.emptyFields.password);

        //  Assertion to confirm login
            ln.verifyLoginFailure();

        })
   
    })

})