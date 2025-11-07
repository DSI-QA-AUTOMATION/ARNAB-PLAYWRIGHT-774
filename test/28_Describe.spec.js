import {test,expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log("This is Before all hook.......");
})

test.afterAll(async()=>{
    console.log("This is after all hook.......");
})


test.beforeEach(async()=>{
    console.log("This is beforeEach hook.......");
})


test.afterEach(async()=>{
    console.log("This is afterEach hook.......");
})



test.describe("Group 1", async()=>{
    test("testing 1", async({page})=>{
        console.log("This is test 1.........");
    })

    test("testing 2", async({page})=>{
        console.log("This is test 2.........");
    })
})


test.describe("Group 3", async()=>{
    test("testing 3", async({page})=>{
        console.log("This is test 3.........");
    })

    test("testing 4", async({page})=>{
        console.log("This is test 4.........");
    })
})