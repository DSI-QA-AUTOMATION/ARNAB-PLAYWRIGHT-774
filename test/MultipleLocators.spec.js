import {test,expect} from "@playwright/test";

test('MultipleLocators', async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    for(const product of products)
    {
        const productText = await product.textContent();
        console.log(productText);
    }
})