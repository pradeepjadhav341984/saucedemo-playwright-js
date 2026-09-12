const { test, expect } = require('../../fixtures/test-fixtures');
const{users} = require('../../test-data/users');

test.describe('Login Tests', () => {
    test('Valid User Login', async ({ page, loginPage }) => {
        await loginPage.navigateToLogin();
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL('/inventory.html');
    });
});
