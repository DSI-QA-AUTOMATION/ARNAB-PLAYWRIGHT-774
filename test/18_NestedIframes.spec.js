import {test,expect} from '@playwright/test'

test('Nested Iframe Testing', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    // await frame3.fill("input[name='mytext3']", "This is for frame 3");
    const nestedframe = await frame3.childFrames();
    await nestedframe[0].locator("#i6 > div.vd3tt > div").check();
    await page.waitForTimeout(5000);

})