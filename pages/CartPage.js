const { logger } = require('../utils/logger');

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.itemNames = page.locator('.inventory_item_name');
        this.itemPrices = page.locator('.inventory_item_price');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    }

    async navigateToCart() {
        logger.info('Navigating to the shopping cart');
        await this.page.goto('/cart.html');
    }

    cartItem(productName) {
        return this.cartItems.filter({ hasText: productName });
    }

    async getItemNames() {
        return await this.itemNames.allTextContents();
    }

    async getItemCount() {
        return await this.cartItems.count();
    }

    async getItemPrices() {
        return await this.itemPrices.allTextContents();
    }

    async removeProduct(productName) {
        logger.info(`Removing product from cart page: ${productName}`);
        await this.cartItem(productName).getByRole('button', { name: 'Remove' }).click();
    }

    async proceedToCheckout() {
        logger.info('Proceeding to checkout');
        await this.checkoutButton.click();
    }

    async continueShopping() {
        logger.info('Continuing shopping from cart');
        await this.continueShoppingButton.click();
    }
}
