class LoginPageObject{
    weblocators ={
        loginbtn : "#login2",
        username : "#loginusername",
        password:"#loginpassword",
        login : "button[onclick='logIn()']"
    };

    async navigateToLoginLocator()
    {
        return this.weblocators.loginbtn;
    }

    async getUserNameLocator()
    {
        return this.weblocators.username;
    }

    async getUserPasswordLocator()
    {
        return this.weblocators.password;
    }
}

export default LoginPageObject;