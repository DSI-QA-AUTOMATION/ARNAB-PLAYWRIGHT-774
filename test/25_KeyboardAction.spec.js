import {expect,test} from '@playwright/test'

test("Keyboard Actions", async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
    await page.fill("[name='text1']", "Welcome to the Automation");

    // Selecting the text
    await page.keyboard.press("Control+A");

    // Copying the text
    await page.keyboard.press("Control+C");

    // Tab the element
    await page.keyboard.up("Tab");
    await page.keyboard.down("Tab");

    //Paste the text
    await page.keyboard.press("Control+V");

    // Wait for timeout
    await page.waitForTimeout(5000);


})