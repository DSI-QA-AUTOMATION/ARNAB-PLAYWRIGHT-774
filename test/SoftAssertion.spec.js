import {test,expect} from '@playwright/test'

test("Soft Assertion", async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await expect.soft(page).toHaveTitle('Store')
    await expect.soft(page.locator('#navbarExample ul li')).toHaveCount(6)
    await expect(page.locator('#login2')).toBeVisible()
    
})