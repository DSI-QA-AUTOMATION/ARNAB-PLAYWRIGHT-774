import {test,expect} from '@playwright/test';


test("Record video when an test case fails", async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.click("#login2");
    await page.fill("#loginusername", "pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("button[onclick='logIn()']");
    await page.waitForTimeout(2000);
    expect(await page.locator("#logout")).toBeVisible();
})