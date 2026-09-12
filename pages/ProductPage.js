export class ProductPage {

    constructor(page) {
        this.page = page;
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.cartBadge = page.locator('.shopping_cart_badge');
    }   
    async addToCart() {
        await this.addToCartButton.click();
    }
}