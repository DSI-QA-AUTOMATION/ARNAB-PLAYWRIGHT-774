import { test, expect } from '@playwright/test'


// // Date Picker-1
// test('date picker using typing directly for date picker 1', async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.fill("#datepicker", "03/25/2022");
// })


// // Date Picker-1
// test('date picker using looping for date picker 1', async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const year = "2021";
//     const month = "April";
//     const date = "15";

//     await page.click("#datepicker");

//     while (true) {
//         const currentMonth = await page.locator(".ui-datepicker-month").textContent();
//         const currentYear = await page.locator(".ui-datepicker-year").textContent();

//         if (currentYear == year && currentMonth == month) {
//             break;
//         }

//         if (currentYear < year || currentMonth < month) {
//             await page.click("a[title='Next']");
//         }
//         else {
//             await page.click("a[title='Prev']");
//         }



//     }



//     const dates = await page.$$(".ui-datepicker-calendar>tbody>tr>td");

//     for (const dt of dates) {
//         if (await dt.textContent() == date) {
//             await dt.click();
//             break;
//         }
//     }

// })


// // date picker -1
// test('date picker 1 directly', async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const year = "2021";
//     const month = "April";
//     const date = "15";

//     await page.click("#datepicker");

//     while (true) {
//         const currentMonth = await page.locator(".ui-datepicker-month").textContent();
//         const currentYear = await page.locator(".ui-datepicker-year").textContent();

//         if (currentYear == year && currentMonth == month) {
//             break;
//         }

//         if (currentYear < year || currentMonth < month) {
//             await page.click("a[title='Next']");
//         }
//         else {
//             await page.click("a[title='Prev']");
//         }



//     }

//     // without looping

//     await page.click(`//a[@class='ui-state-default'][text()='${date}']`)


// })


// // Date Picker -2
// test('selecting date using a loop', async ({ page }) => {
//     const date = "25";
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.click("#txtDate");
//     await page.selectOption("select[aria-label='Select month']", "Apr");
//     const monthvalidation = await page.locator("select[aria-label='Select month']>option");
//     expect(monthvalidation).toHaveCount(12);
//     await page.selectOption("select[aria-label='Select year']", "2023");


//     const dates = await page.$$(".ui-state-default");

//     for(const dt of dates)
//     {
//         if(await dt.textContent() == date)
//         {
//             await dt.click();
//             break;
//         }
//     }

// })


// // Date picker 3
// test("Date Picker 3", async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     // await page.fill('#start-date', '2025-11-05');
//     await page.fill('#start-date', '2025-11-05');
//     await page.fill("#end-date", "2025-11-28");
//     await page.click(".submit-btn");


// })

test("Date Picker 3 using tab", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.click("#start-date");
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab'); // presses the Tab keyawait page.waitForTimeout(20000);
    await page.waitForTimeout(2000);
    // await page.keyboard.press('Tab');
    // await page.waitForTimeout(2000);
    // await page.keyboard.press('Tab');
    await page.keyboard.press('Enter'); // Simulates pressing Enter
    // await page.waitForTimeout(2000);

    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);

    //  await page.keyboard.press('Tab');
    //  await page.waitForTimeout(2000);
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Tab');

    // await page.waitForTimeout(5000);
   await page.keyboard.press('Enter');
    // await page.waitForTimeout(10000);

    await page.waitForTimeout(2000);



})