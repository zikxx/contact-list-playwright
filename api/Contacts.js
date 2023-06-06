const BaseApi = require("./BaseApi");
const {expect} = require("@playwright/test");

class Contacts extends BaseApi {
    constructor() {
        super();
    }

    /**
     * Create new contact
     *
     * @param contactData
     * @returns {Promise<*>}
     */
    async addContact(contactData) {
        const response = await this.post('contacts', contactData);
        await expect(response.status()).toBe(201);
        console.log(`Contact created!`)
        return await response.json();
    }

    /**
     * Get contact
     *
     * @returns {Promise<*>}
     */
    async getContact(contactId) {
        const response = await this.get(`contacts/${contactId}`, null);
        await expect(response.status()).toBe(200);
        console.log(`Contact with id: ${contactId}`)
        console.log(await response.json());
        return await response.json();
    }

    /**
     * Get all contacts
     *
     * @returns {Promise<*>}
     */
    async getAllContacts() {
        const response = await this.get('contacts', null);
        await expect(response.status()).toBe(200);
        console.log('All contacts:')
        console.log(await response.json());
        return await response.json();
    }

    /**
     * Update contact
     *
     * @returns {Promise<*>}
     */
    async updateContact(contactId, contactData) {
        const response = await this.put(`contacts/${contactId}`, contactData);
        await expect(response.status()).toBe(200);
        console.log(`Contact with id: ${contactId} updated`)
        console.log(await response.json());
        return await response.json();
    }

    /**
     * Delete contact
     *
     * @returns {Promise<*>}
     */
    async deleteContact(contactId) {
        const response = await this.delete(`contacts/${contactId}`, null);
        await expect(response.status()).toBe(200);
        console.log(`Contact with id: ${contactId} deleted!`);
    }

    /**
     * Delete all existing contacts
     *
     * @returns {Promise<*>}
     */
    async deleteAllContacts() {
        let allContacts = await this.getAllContacts();
        for (const contact of allContacts) {
            const response = await this.delete(`contacts/${contact._id}`, null);
            await expect(response.status()).toBe(200);
            console.log(`Contact with id: ${contact._id} deleted!`);
        }
        console.log(`All existing contacts are deleted!`);

    }
}

module.exports = Contacts;