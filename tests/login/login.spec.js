const{test, expect} = require('@playwright/test');
const{LoginPage} = require('../../pages/LoginPage');
const{users} = require('../../test-data/users');

test.describe('Login Tests', () => {
    let loginPage;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
    });
    test('Valid User Login', async ({page}) => {
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL('/inventory.html');
    });
});
