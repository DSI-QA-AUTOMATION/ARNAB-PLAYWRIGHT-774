import {test,expect} from '@playwright/test'

test('single checkbox', async({page})=>{
    await page.goto("https://demoqa.com/checkbox");
    await page.locator("//button[@title='Toggle']").click();
    await page.check("label[for='tree-node-home']");
    await expect(page.locator("label[for='tree-node-home']")).toBeChecked();

})

test('multiple checkbox', async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    // await page.locator("//button[@title='Toggle']").click();
    const chkboxlocators = [
        "label[for='hobbies-checkbox-1']",
        "label[for='hobbies-checkbox-2']",
        "label[for='hobbies-checkbox-3']"
    ]

    for(const loc of chkboxlocators)
    {
        await page.locator(loc).check();
    }

    for(const loc of chkboxlocators)
    {
        if(await page.locator(loc).isChecked())
        {
           await page.uncheck(loc);
        }
    }
    
})