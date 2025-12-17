class LoginPageObject{
    weblocators ={
        loginbtn : "#login2",
        username : "#loginusername",
        password:"#loginpassword",
        login: "button[onclick='logIn()']"
    };

    navigateToLoginLocator(page)
    {
        return  page.locator(this.weblocators.loginbtn);
    }

    getUserNameLocator(page)
    {
        return page.locator(this.weblocators.username);
    }

    getUserPasswordLocator(page)
    {
        return  page.locator(this.weblocators.password);
    }

    getLoginButtonLocator(page)
    {
        return  page.locator(this.weblocators.login);
    }


}

export default LoginPageObject;