const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductPage } = require('../../pages/ProductPage');
const { users } = require('../../test-data/users');

test.describe('Product Tests', () => {
    let productPage;

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
        await loginPage.login(users.validUser.username, users.validUser.password);

        productPage = new ProductPage(page);
        await productPage.navigateToProductPage(4);
    });

    test('Product page loads with an enabled Add to cart button', async () => {
        await expect(productPage.addToCartButton).toBeVisible();
        await expect(productPage.addToCartButton).toHaveText('Add to cart');
        await expect(productPage.addToCartButton).toBeEnabled();
        await expect(productPage.page).toHaveURL(/inventory-item\.html\?id=4/);
    });

    test('User can add and remove a product from the cart', async () => {
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
