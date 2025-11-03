import {test,expect} from '@playwright/test'


// Date Picker-1
test('date picker using typing directly for date picker 1', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.fill("#datepicker", "03/25/2022");
})