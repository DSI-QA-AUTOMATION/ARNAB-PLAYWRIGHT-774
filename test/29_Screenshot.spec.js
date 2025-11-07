import {test,expect} from '@playwright/test'

test("Page Screenshot", async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(1000);
    await page.screenshot({path:"tests/Screenshot/"+Date.now()+"PageScreenshot.png"})
})


test("Full Page Screenshot", async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(1000);
    await page.screenshot({path:"tests/Screenshot/"+Date.now()+"FullPageScreenshot.png", fullPage:true})
})




test("Portion of the Page Screenshot", async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(1000);
    await page.locator("(//div[@class='col mb-3'])[1]").screenshot({path:"tests/Screenshot/"+Date.now()+"FullPageScreenshot.png", fullPage:true})
})