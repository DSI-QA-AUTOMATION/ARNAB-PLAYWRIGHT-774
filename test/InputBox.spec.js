import {test,expect} from '@playwright/test'

 test('InputBox', async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await expect(page.locator('#firstName')).toBeVisible();
    await expect(page.locator('#firstName')).toBeEmpty();
    await expect(page.locator('#firstName')).toBeEditable();
    await page.fill('#firstName','Ratul');
    await expect(page.locator('#firstName')).toHaveValue('Ratul');

})