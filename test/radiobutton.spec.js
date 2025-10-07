import {test,expect} from '@playwright/test'

 test('Radio',async({page})=>{
    await page.goto("https://demoqa.com/radio-button");
    await page.check("label[for='impressiveRadio']");
    await expect(await page.locator("label[for='impressiveRadio']")).toBeChecked();
    await expect(await page.locator("label[for='impressiveRadio']").isChecked()).toBeTruthy();
    await expect(await page.locator('.text-success')).toHaveText("Impressive");
    await expect(await page.locator("label[for='yesRadio']").isChecked()).toBeFalsy();

})