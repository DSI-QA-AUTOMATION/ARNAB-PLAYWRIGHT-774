import {test,expect} from '@playwright/test'

test('Built-in Locators',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //page.getByAltText()--method
    const logo= page.getByAltText('orangehrm-logo');
    console.log(logo);
    await expect(logo).toBeVisible();

    // page.getByPlaceholder()
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    // page.getByRole()

})


