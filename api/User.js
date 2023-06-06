const BaseApi = require("./BaseApi");
const {expect} = require("@playwright/test");

class User extends BaseApi {
    constructor() {
        super();
    }

    async login(email, password) {
        const response = await this.post('users/login', {
            email: email,
            password: password
        });
        await expect(response.status()).toBe(200);
        const data = await response.json();
        process.env.COOKIE = data.token;
        console.log(`User '${email}' logged in!`)
        return data;
    }

    /**
     * Get currently logged-in user
     *
     * @returns {Promise<*>}
     */
    async getCurrentUser() {
        const response = await this.get('users/me', null);
        await expect(response.status()).toBe(200);
        console.log(`Current user data:`)
        return await response.json();
    }

    /**
     * Logout from application
     *
     * @returns {Promise<void>}
     */
    async logout() {
        const response = await this.post('users/logout', {});
        await expect(response.status()).toBe(200);
        console.log(`User logged out!`)
    }
}

module.exports = User;