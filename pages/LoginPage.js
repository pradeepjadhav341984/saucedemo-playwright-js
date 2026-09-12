const { logger } = require('../utils/logger');

export class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameInput = page.getByPlaceholder('Username');

        this.passwordInput = page.getByPlaceholder('Password');

        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.errorMessage = page.locator('[data-test="error"]');

    }


    async navigateToLogin() {

        logger.info('Navigating to the login page');
        await this.page.goto('/');

    }


    async login(username, password) {

        logger.info(`Attempting login for user: ${username}`);
        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

        logger.info(`Login submitted for user: ${username}`);

    }


    async getErrorMessage() {

        const errorMessage = await this.errorMessage.textContent();
        logger.warn(`Login error displayed: ${errorMessage}`);
        return errorMessage;

    }

}