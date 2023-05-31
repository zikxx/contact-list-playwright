exports.ContactsPage = class ContactsPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.addContact = page.getByTestId('add-contact');
        this.firstName = page.getByTestId('firstName');
        this.lastName = page.getByTestId('lastName');
        this.dateOfBirth = page.getByTestId('birthdate');
        this.streetAddress1 = page.getByTestId('street1');
        this.streetAddress2 = page.getByTestId('street2');
        this.city = page.getByTestId('city');
        this.stateProvince = page.getByTestId('stateProvince');
        this.postalCode = page.getByTestId('postalCode');
        this.country = page.getByTestId('country');
        this.submit = page.getByTestId('submit');
        this.cancel = page.getByTestId('cancel');
        this.logout = page.getByTestId('logout');
        this.errorMessage = page.getByTestId('error');
        this.editContact = page.getByTestId('edit-contact');
        this.deleteContact = page.getByTestId('delete');
        this.returnToContactList = page.getByTestId('return');
    }

    async createNewContact(contactData) {
        await this.firstName.fill(contactData.firstName);
        await this.lastName.fill(contactData.lastName);
        if (contactData.dateOfBirth) {
            await this.dateOfBirth.fill(contactData.dateOfBirth);
        }
        if (contactData.streetAddress1) {
            await this.streetAddress1.fill(contactData.streetAddress1);
        }
        if (contactData.streetAddress2) {
            await this.streetAddress2.fill(contactData.streetAddress2);
        }
        if (contactData.city) {
            await this.city.fill(contactData.city);
        }
        if (contactData.stateProvince) {
            await this.stateProvince.fill(contactData.stateProvince);
        }
        if (contactData.postalCode) {
            await this.postalCode.fill(contactData.postalCode);
        }
        if (contactData.country) {
            await this.country.fill(contactData.country);
        }
    }

    async logoutFromApp() {
        await this.logout.click();
    }
}