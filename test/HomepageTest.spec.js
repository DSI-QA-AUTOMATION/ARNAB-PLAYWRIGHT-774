import { test, expect } from '@playwright/test';

test('HomePage', async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    const pageTitle = await page.title();
    console.log("Page title is "+pageTitle);
    await expect(page).toHaveTitle("STORE");
    const pageUrl = page.url();
    console.log(pageUrl);
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    page.close();
})