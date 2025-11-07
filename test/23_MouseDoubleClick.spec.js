 import {test,expect} from '@playwright/test';

 test("Double Click Testing", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const btn = await page.locator("button[ondblclick='myFunction1()']");
    await btn.dblclick();

    const f2 = await page.locator("#field2");
    expect(f2).toHaveValue("Hello World!");
    await page.waitForTimeout(2000);



 })