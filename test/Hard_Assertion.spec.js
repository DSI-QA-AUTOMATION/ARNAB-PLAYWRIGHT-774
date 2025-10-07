import {test,expect} from '@playwright/test'

test('Assertions', async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    const pageTitleText = page.locator(".page-title");
    await expect(pageTitleText).toHaveText("Register");
    await page.locator("label[for='gender-male']").click();
    await expect(page.locator("label[for='gender-male']")).toBeChecked();
    await page.fill('#FirstName','ABCD');
    await expect(page.locator('#FirstName')).toHaveValue('ABCD');
    await expect(page.locator('#small-searchterms')).toBeEnabled();
    


})