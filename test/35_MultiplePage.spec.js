import {test,expect,chromium} from '@playwright/test';


test('Handle Pages/Windows', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1=await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log("No of Pages created", allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");


    await page2.goto("https://www.orangehrm.com/");
    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");



})



test.only('Handle Multiple Pages', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1=await context.newPage();
    
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");
    const pagePromise = context.waitForEvent('page')
    await page1.click("a[href='http://www.orangehrm.com']");

    const newpage = await pagePromise;
    await expect(newpage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");

    

})