import {test,expect} from "@playwright/test";

test("Mouse Right Click", async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const rghtclick = await page.locator(".context-menu-one.btn.btn-neutral");
    await rghtclick.click({button:"right"});
    await page.waitForTimeout(2000);
})