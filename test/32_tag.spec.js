import {test,expect} from '@playwright/test'

test('First@sanity', async({page})=>{
    console.log("This is sanity testing 1");

})


test('Second@sanity', async({page})=>{
    console.log("This is sanity testing 2");

})


test("Third@reg",async({page})=>{
    console.log("This is regression testing 1");
})


test("Forth@sanity@reg", async({page})=>{
    console.log("This is regression and sanity testing");
})