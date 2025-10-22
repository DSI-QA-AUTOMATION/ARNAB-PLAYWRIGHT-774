import {test,expect} from '@playwright/test'

test('Hidden DropDown', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.fill("input[placeholder='Username']", 'Admin');
    await page.fill("input[placeholder='Password']", 'admin123')

    await page.locator("button[type='submit']").click()

    await page.locator("(//span[normalize-space()='PIM'])[1]").click()

    await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[3]").click()

    // waiting for options
    await page.waitForTimeout(3000);

    var options = await page.$$("//div[@role='listbox']//span");

    for(let option of options)
    {
        let jobtitle = await option.textContent();
        console.log(jobtitle);

        if(jobtitle.includes('QA Engineer'))
        {
            await option.click()
            break;
        }
    
    }

    await page.waitForTimeout(5000);

})