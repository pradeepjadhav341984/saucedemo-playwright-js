const { test, expect } = require('../../fixtures/test-fixtures');

test.describe('Checkout Tests', () => {
    test('User can complete an order', async ({ checkoutPage }) => {
        await checkoutPage.fillCustomerInformation('Test', 'Customer', '12345');
        await checkoutPage.continueToOverview();
        await expect(checkoutPage.page).toHaveURL(/\/checkout-step-two\.html/);
        await checkoutPage.completeOrder();

        await expect(checkoutPage.page).toHaveURL(/\/checkout-complete\.html/);
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    });

    test('Checkout requires customer information', async ({ checkoutPage }) => {
        await checkoutPage.continueToOverview();
        await expect(checkoutPage.errorMessage).toContainText('First Name is required');
    });
});
