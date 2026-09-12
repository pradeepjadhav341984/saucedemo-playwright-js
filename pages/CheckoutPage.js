const { logger } = require('../utils/logger');

export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.errorMessage = page.locator('[data-test="error"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
    }

    async fillCustomerInformation(firstName, lastName, postalCode) {
        logger.info('Filling checkout customer information');
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueToOverview() {
        logger.info('Continuing to checkout overview');
        await this.continueButton.click();
    }

    async completeOrder() {
        logger.info('Completing the order');
        await this.finishButton.click();
    }

    async cancelCheckout() {
        logger.info('Cancelling checkout');
        await this.cancelButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    async getConfirmationMessage() {
        return await this.completeHeader.textContent();
    }
}
