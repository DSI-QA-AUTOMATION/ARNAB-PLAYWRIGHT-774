import LoginPageObject from "./LoginPageObject";

class LoginPageMethod
{
    constructor(page)
    {
        this.page = page;
        this.locators = new LoginPageObject()
    }

    async navigateLoginButton()
    {
        await this.locators.navigateToLoginLocator(this.page).click();
        return this;
    }

    async getUserName()
    {
        await this.locators.getUserNameLocator(this.page).fill("pavanol");
        return this;
    }

    async getUserPassword()
    {
        await this.locators.getUserPasswordLocator(this.page).fill("test@123");
        return this;
    }

    async clickOnLoginButton()
    {
        await this.locators.getLoginButtonLocator(this.page).click();
        return this;
    }

    async pageVisit()
    {
        await this.page.goto("https://demoblaze.com/index.html");
        return this;
    }
}

export default LoginPageMethod;