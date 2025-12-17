import {test,expect} from '@playwright/test';
import LoginPageMethod from './34_POM/LoginPageMethod';
import HomePageMethods from './34_POM/HomePageMethod';
import { waitForDebugger } from 'inspector';


test("add to Product", async({page})=>{
    const login = new LoginPageMethod(page);
    const homepage = new HomePageMethods(page);
    (await (await (await (await login.pageVisit()).navigateLoginButton()).getUserName()).getUserPassword()).clickOnLoginButton();
    await page.waitForTimeout(3000);
    await homepage.selectParticularProduct("Nexus 6");
    await homepage.clickOnAddtoCart();
    await homepage.navigateToCartPage();
    // await homepage.selectParticularProduct("Nexus 6");
    // await page.waitForTimeout(5000);
    // await homepage.clickOnAddtoCart();
   

})


