exports.LoginPage = class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.email = page.getByTestId('email');
        this.password = page.getByTestId('password');
        this.submitButton = page.getByTestId('submit');
        this.signUpButton = page.getByTestId('signup');
        this.errorMessage = page.getByTestId('error');
    }

    /**
     * Login to website with credentials from .env file
     *
     * @returns {Promise<void>}
     */
    async login(){
        await this.email.fill(process.env.EMAIL);
        await this.password.fill(process.env.PASSWORD);
        await this.submitButton.click();
    }

    /**
     * Login to website with custom credentials
     *
     * @returns {Promise<void>}
     */
    async loginWithCustomCredentials(email, password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submitButton.click();
    }
}