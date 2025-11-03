import {test,expect} from '@playwright/test'

test.skip('Alert Dialog Handling', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert Handling and Dialog windown handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box');
        await dialog.accept();
    })


    await page.click("//button[@id='alertBtn']");
})


test('Confirmation',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept() // closes the confirmation using ok button
        // await dialog.dismiss() // closes the confirmation window using cancel button
    
    })

    await page.click("//button[@id='confirmBtn']");
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")
})


test('Prompt Window',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept('John');

    })

    await page.click("//button[@id='promptBtn']");
    await expect(page.locator("#demo")).toHaveText("Hello John! How are you today?")
    await page.waitForTimeout(5000);
})