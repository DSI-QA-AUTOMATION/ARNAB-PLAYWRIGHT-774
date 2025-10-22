import { test, expect } from '@playwright/test'

test('Handle Dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Mutliple way to select option from the dropdown
    await page.locator("#country").selectOption({ label: "Germany" }); //1st way
    await page.locator("#country").selectOption("Germany"); //2nd way
    await page.locator("#country").selectOption({ value: "germany" }); //3rd way
    await page.locator("#country").selectOption({ index: 1 }); //4th way
    await page.selectOption("#country", 'Germany'); //5th way
    await page.locator("#country").selectOption({ index: 1 }); //4th way


    // Assertions
    // 1.Check number of options in dropdown --Approach 1
    var options = await page.locator('#country option')
    await expect(options).toHaveCount(10)

    // 2. Check the number of options in dropdown -- Approach 2
    var options = await page.$$('#country option') //in the form of array
    console.log('Number of options: ', options.length);
    await expect(options.length).toBe(10);

    // 3.check presence of value in the dropdown
    const content = await page.locator("#country").textContent();
    await expect(content.includes('Germany')).toBeTruthy();


    // 4. Check presence of value in the dropdown -- Approach 2 - using looping
    var options2 = await page.$$('#country option')
    let status = false;

    for (const option of options2) {
        let val = await option.textContent();
        if (val.includes('France')) {
            status = true;
            break;
        }
    }

    expect(status).toBeTruthy()


    // 4. Check presence of value in the dropdown -- Approach 2 - using looping
    var options3 = await page.$$('#country option')

    for (const option of options3) {
        let val = await option.textContent();
        if (val.includes('France')) {
            await page.selectOption("#country", val );
            break;
        }
    }


    await page.waitForTimeout(5000);
})