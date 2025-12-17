class HomePageObjects{

    weblocators ={
        productList : ".card-title>a",
        addtoCart : "//a[normalize-space()='Add to cart']",
        cartPage : "#cartur"
    }

    getProductListLocator(page)
    {
        return this.weblocators.productList;
    }

    getAddToCartLocator(page)
    {
        return page.locator(this.weblocators.addtoCart);
    }

    getCartPageLocator(page)
    {
        return page.locator(this.weblocators.cartPage);
    }

}

export default HomePageObjects;