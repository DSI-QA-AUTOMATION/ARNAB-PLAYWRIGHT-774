import {test,expect} from '@playwright/test'

test('frames with approach-1', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // total frames
    const allframes = await page.frames();
    
    console.log("Number of frames", allframes.length)

    // approach-1: using name or url
    // const var = await page.frame('name') // if name is present
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']", 'Hello');
    await page.waitForTimeout(5000);


})




test.only('frames with approach-2', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // total frames
    const allframes = await page.frames();
    
    console.log("Number of frames", allframes.length)

    // approach-1: using name or url
    // const var = await page.frame('name') // if name is present
    const frame2 = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    frame2.fill("This is approach two of frame");
    await page.waitForTimeout(5000);





})