import HomePageObjects from "./HomePageObject";


class HomePageMethods{
    constructor(page)
    {
        this.page = page;
        this.locators = new HomePageObjects();
    }

    async selectParticularProduct(product_name) {
        
        const productLocator = this.page.locator(this.locators.getProductListLocator());
        const count = await productLocator.count();

        for (let i = 0; i < count; i++) {
            const product = productLocator.nth(i);
            const text = await product.textContent();

            console.log(text); 

            if (text?.trim() === product_name.trim()) {
                console.log(`Clicking on product: ${product_name}`);
                await product.click(); 
                return this;
            }
        }

        throw new Error(`Product "${product_name}" not found`);
    }

    async clickOnAddtoCart(page)
    {
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added'))
            {
                await dialog.accept();
            }
        })

        await this.locators.getAddToCartLocator(this.page).click();

        return this;
    }


    async navigateToCartPage()
    {
        await this.locators.getCartPageLocator(this.page).click();
        return this;
    }






}


export default HomePageMethods;