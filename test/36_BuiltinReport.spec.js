import {test,expect} from'@playwright/test'

test('DemoBlaze',async({page})=>{
    await page.goto("https://demoblaze.com/");
    await expect(page).toHaveTitle('STORE');
})

test('OrnageHRM',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
})