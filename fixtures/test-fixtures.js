const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
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
});

module.exports = { test, expect };
