const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { users } = require('../test-data/users');

const test = base.extend({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},

	authenticatedPage: async ({ page, loginPage }, use) => {
		await loginPage.navigateToLogin();
		await loginPage.login(users.validUser.username, users.validUser.password);
		await use(page);
	},

	productPage: async ({ authenticatedPage }, use) => {
		const productPage = new ProductPage(authenticatedPage);
		await productPage.navigateToProductPage(4);
		await use(productPage);
	},

	inventoryPage: async ({ authenticatedPage }, use) => {
		const inventoryPage = new InventoryPage(authenticatedPage);
		await inventoryPage.navigateToInventory();
		await use(inventoryPage);
	},

	cartPage: async ({ authenticatedPage }, use) => {
		const cartPage = new CartPage(authenticatedPage);
		await cartPage.navigateToCart();
		await use(cartPage);
	},

	checkoutPage: async ({ inventoryPage }, use) => {
		await inventoryPage.addProductToCart('Sauce Labs Backpack');
		await inventoryPage.openCart();
		const cartPage = new CartPage(inventoryPage.page);
		await cartPage.proceedToCheckout();

		const checkoutPage = new CheckoutPage(inventoryPage.page);
		await use(checkoutPage);
	},
});

module.exports = { test, expect };
