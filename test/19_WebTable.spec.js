import { test, expect } from '@playwright/test';

test('Table rows and columns count', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");


    // count the no. of rows and columns
    const table = await page.locator('#productTable');

    // count the no. of columns
    const cols = await table.locator('thead tr th');
    console.log("Total no. of columns are: ", cols.count());
    expect(await cols.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log("Total no. of rows are: ", rows.count());
    expect(await rows.count()).toBe(5);



})


test('select a particular product', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator('#productTable');
    const cols = await table.locator('thead tr th');
    const rows = await table.locator('tbody tr');

    const particularProduct = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'

    })

    await particularProduct.locator('input').check();


})


test('select  multiple products', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator('#productTable');
    const cols = await table.locator('thead tr th');
    const rows = await table.locator('tbody tr');

    await selectProduct(rows, page, 'Laptop');
    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Wireless Earbuds');



})

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name

    })

    await matchedRow.locator('input').check();
}



// print all product list using loop
test('Print all products name and price using loop', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator('#productTable');
    const rows = await table.locator('tbody tr');

    for (let i = 0; i < await rows.count(); i++) {
        const rowItem = rows.nth(i);
        const tds = await rowItem.locator('td');

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());
        }
    }
})


// print all the products of pagination using for loop
test('Reading all the data using pagination', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator('#productTable');
    const rows = await table.locator('tbody tr');

    const p = await page.locator("#pagination li a");
    console.log("Total no. of pages present are", p.count());

    for (let k = 0; k < await p.count(); k++) {
        if (k > 0) {
            p.nth(k).click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            const rowItem = rows.nth(i);
            const tds = await rowItem.locator('td');

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }
})
