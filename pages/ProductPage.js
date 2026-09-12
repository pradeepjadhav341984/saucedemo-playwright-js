const { logger } = require('../utils/logger');

export class ProductPage {

    constructor(page) {
        this.page = page;
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.cartBadge = page.locator('.shopping_cart_badge');
    }   
    async addToCart() {
        logger.info('Adding product to cart');
        await this.addToCartButton.click();
    }
    async removeFromCart() {
        logger.info('Removing product from cart');
        await this.removeButton.click();
    }
    async getCartBadgeCount() {
        return await this.cartBadge.textContent();
    }
    async isCartBadgeVisible() {
        return await this.cartBadge.isVisible();
    }
    async navigateToProductPage(productId) {
        logger.info(`Navigating to product page: ${productId}`);
        await this.page.goto(`/inventory-item.html?id=${productId}`);
    }
    async isAddToCartButtonVisible() {
        return await this.addToCartButton.isVisible();
    }
    async isRemoveButtonVisible() {
        return await this.removeButton.isVisible();
    }
    async getAddToCartButtonText() {
        return await this.addToCartButton.textContent();
    }
    async getRemoveButtonText() {
        return await this.removeButton.textContent();
    }
    async isAddToCartButtonEnabled() {
        return await this.addToCartButton.isEnabled();
    }
    async isRemoveButtonEnabled() {
        return await this.removeButton.isEnabled();
}
async getPageTitle() {
        return await this.page.title();
    }
    async getPageURL() {
        return this.page.url();
    }
    async getPageContent() {
        return await this.page.content();
    }
    async getPageSource() {
        return await this.page.content();
    }
        
}