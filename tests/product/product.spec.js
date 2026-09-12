const { test, expect } = require('../../fixtures/test-fixtures');

test.describe('Product Tests', () => {
    test('Product page loads with an enabled Add to cart button', async ({ productPage }) => {
        await expect(productPage.addToCartButton).toBeVisible();
        await expect(productPage.addToCartButton).toHaveText('Add to cart');
        await expect(productPage.addToCartButton).toBeEnabled();
        await expect(productPage.page).toHaveURL(/inventory-item\.html\?id=4/);
    });

    test('User can add and remove a product from the cart', async ({ productPage }) => {
        await productPage.addToCart();

        await expect(productPage.removeButton).toBeVisible();
        await expect(productPage.removeButton).toHaveText('Remove');
        await expect(productPage.isCartBadgeVisible()).resolves.toBe(true);
        await expect(productPage.getCartBadgeCount()).resolves.toBe('1');

        await productPage.removeFromCart();

        await expect(productPage.addToCartButton).toBeVisible();
        await expect(productPage.isRemoveButtonVisible()).resolves.toBe(false);
        await expect(productPage.isCartBadgeVisible()).resolves.toBe(false);
    });
});
