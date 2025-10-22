import {test, expect} from '@playwright/test';


test('MultiSelectionDropdown', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");


    // Select multiple options from multi select dropdown

    await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])

    // Assertions
    // 1. Check number of options in dropdown --Approach-1
    var options = await page.locator('#colors option')
    await expect(options).toHaveCount(7);

    // 2. Check number of options in dropdown --Approach-2
    var options = await page.$$('#colors option') ;
    console.log("Number of options", options.length);
    await expect(options.length).toBe(7);
    
    // 3. check presence of value in the dropdown
    var content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Blacks')).toBeFalsy();



    await page.waitForTimeout(5000);
})
