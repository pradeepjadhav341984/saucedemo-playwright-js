const { logger } = require('../utils/logger');

export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryItems = page.locator('.inventory_item');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.cartLink = page.locator('.shopping_cart_link');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
    }

    async navigateToInventory() {
        logger.info('Navigating to the inventory page');
        await this.page.goto('/inventory.html');
    }

    productItem(productName) {
        return this.inventoryItems.filter({ hasText: productName });
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }

    async getProductPrices() {
        return await this.productPrices.allTextContents();
    }

    async addProductToCart(productName) {
        logger.info(`Adding product to cart from inventory: ${productName}`);
        await this.productItem(productName).getByRole('button', { name: 'Add to cart' }).click();
    }

    async removeProductFromCart(productName) {
        logger.info(`Removing product from cart from inventory: ${productName}`);
        await this.productItem(productName).getByRole('button', { name: 'Remove' }).click();
    }

    async sortProducts(option) {
        logger.info(`Sorting products by: ${option}`);
        const sortOptions = {
            asc: 'az',
            desc: 'za',
            priceLowToHigh: 'lohi',
            priceHighToLow: 'hilo',
        };
        await this.sortDropdown.selectOption(sortOptions[option] || option);
    }

    async getCartBadgeCount() {
        return await this.page.locator('.shopping_cart_badge').textContent();
    }

    async openCart() {
        logger.info('Opening the shopping cart');
        await this.cartLink.click();
    }

    async logout() {
        logger.info('Logging out');
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}
