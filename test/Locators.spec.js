import {test,expect} from '@playwright/test';

test('Locators',async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.click("#login2");
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click("//button[normalize-space()='Log in']");
    const logoutLink = await page.locator("#logout2");
    await expect(logoutLink).toBeVisible();
})