import {test,expect} from '@playwright/test';


let page;
test.beforeEach("Login", async({browser})=>{
    page = await browser.newPage();

    await page.goto("https://demoblaze.com/index.html");
    await page.click("#login2");
    await page.fill("#loginusername", "pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("button[onclick='logIn()']");
    await page.waitForTimeout(2000);
})


test.afterEach("Logout", async()=>{
    await page.click("#logout2");
    await page.waitForTimeout(2000);
})


test("Homepage Testing", async()=>{
    await page.waitForSelector("#tbodyid>div")
    const products = await page.$$("#tbodyid>div");
    expect(await products.length).toBe(9);
    await page.waitForTimeout(2000);
})


test("Add to Product Testing", async()=>{
    await page.click("//a[normalize-space()='Samsung galaxy s6']");
    await page.click("//a[normalize-space()='Add to cart']");

    page.on('Dialog', async dialog=>{
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    })

    await page.waitForTimeout(2000);
})