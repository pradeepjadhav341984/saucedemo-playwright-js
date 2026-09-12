const { test, expect } = require('../../fixtures/test-fixtures');
const { CartPage } = require('../../pages/CartPage');

test.describe('Cart Tests', () => {
    let cartPage;

    test.beforeEach(async ({ inventoryPage }) => {
        await inventoryPage.addProductToCart('Sauce Labs Backpack');
        await inventoryPage.openCart();
        cartPage = new CartPage(inventoryPage.page);
    });

    test('User can view the selected product in the cart', async () => {
        await expect(cartPage.page).toHaveURL(/\/cart\.html/);
        await expect(cartPage.itemNames).toHaveText(['Sauce Labs Backpack']);
        await expect(cartPage.itemPrices).toHaveText(['$29.99']);
        await expect(cartPage.getItemCount()).resolves.toBe(1);
    });

    test('User can remove a product from the cart', async () => {
        await cartPage.removeProduct('Sauce Labs Backpack');
        await expect(cartPage.cartItems).toHaveCount(0);
    });

    test('User can continue shopping from the cart', async () => {
        await cartPage.continueShopping();
        await expect(cartPage.page).toHaveURL(/\/inventory\.html/);
    });
});
