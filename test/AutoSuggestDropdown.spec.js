import {test,expect} from '@playwright/test'

test('Auto Suggest Dropdown', async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").fill('Dhaka Weather');
    await page.waitForSelector("(//ul[@role='listbox'])[1]")
    var allopt = await page.$$("(//ul[@role='listbox'])[1]")

    for (let option of allopt)
    {
        const value = await option.textContent();
        if(value.includes('Dhaka Weather'))
        {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);




})