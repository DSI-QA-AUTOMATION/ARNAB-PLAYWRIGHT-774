import {test,expect} from '@playwright/test'

test('Single File Upload', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForSelector("#singleFileInput");
    await page.locator("#singleFileInput").setInputFiles("tests/documentupload/Testing 1.pdf");
    await page.click("//button[normalize-space()='Upload Single File']");
    expect(await page.locator("#singleFileStatus")).toHaveText("Single file selected: Testing 1.pdf, Size: 16008 bytes, Type: application/pdf");
    await page.waitForTimeout(5000);
})

test("Multiple File Upload", async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles(["tests/documentupload/Testing 1.pdf","tests/documentupload/Testing 2.pdf"]);
    await page.waitForTimeout(2000);

    expect(await page.locator("#fileList>li:nth-child(1)")).toHaveText("Testing 1.pdf");
    expect(await page.locator("#fileList>li:nth-child(2)")).toHaveText("Testing 2.pdf");


    await page.waitForTimeout(2000);
    await page.locator("#filesToUpload").setInputFiles([]);
    await page.waitForTimeout(2000);

    expect(await page.locator("ul[id='fileList'] li")).toHaveText("No Files Selected");

    await page.waitForTimeout(2000);


})