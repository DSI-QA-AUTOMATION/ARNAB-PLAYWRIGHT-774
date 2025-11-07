import {test,expect} from '@playwright/test'
test("Drag and Drop using approach-1",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Approach-1
    const drag = await page.locator("#draggable");
    const drop = await page.locator("#droppable");

    await drag.hover();
    await page.mouse.down();

    await drop.hover();
    await page.mouse.up();


})

test("Drag and Drop using approach-2", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Approach-2
    const drag = await page.locator("#draggable");
    const drop = await page.locator("#droppable");

    await drag.dragTo(drop);
})