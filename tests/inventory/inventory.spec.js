const { test, expect } = require('../../fixtures/test-fixtures');

test.describe('Inventory Tests', () => {
    test('User can view and sort products', async ({ inventoryPage }) => {
        await expect(inventoryPage.inventoryItems).toHaveCount(6);
        await expect(inventoryPage.productNames.first()).toHaveText('Sauce Labs Backpack');

        await inventoryPage.sortProducts('desc');
        await expect(inventoryPage.productNames.first()).toHaveText('Test.allTheThings() T-Shirt (Red)');

        await inventoryPage.sortProducts('lohi');
        await expect(inventoryPage.productPrices.first()).toHaveText('$7.99');
    });

    test('User can add and remove a product from inventory', async ({ inventoryPage }) => {
        await inventoryPage.addProductToCart('Sauce Labs Backpack');
        await expect(inventoryPage.page.locator('.shopping_cart_badge')).toHaveText('1');

        await inventoryPage.removeProductFromCart('Sauce Labs Backpack');
        await expect(inventoryPage.page.locator('.shopping_cart_badge')).toHaveCount(0);
    });

    test('User can log out from inventory', async ({ inventoryPage }) => {
        await inventoryPage.logout();
        await expect(inventoryPage.page).toHaveURL(/\/$/);
        await expect(inventoryPage.page.getByRole('button', { name: 'Login' })).toBeVisible();
    });
});
