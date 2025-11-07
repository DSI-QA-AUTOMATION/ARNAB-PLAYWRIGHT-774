import {test,expect} from '@playwright/test';

test("Mouse Hover Interaction", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const point = await page.locator(".dropbtn");
    const laptop = await page.locator("//a[normalize-space()='Laptops']");
    await point.hover();
    await laptop.hover();
    await page.waitForTimeout(2000);
    
})