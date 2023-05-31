// @ts-check
const {test, expect} = require('@playwright/test'),
    {LoginPage} = require("../ui/LoginPage"),
    {ContactsPage} = require("../ui/ContactListPage"),
    contactTestData = require('../data/contactTestData');

test.beforeEach(async ({page}, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    let loginPage = new LoginPage(page);

    await page.goto(process.env.BASEURL);
    await expect(page).toHaveTitle('Contact List App');
    await loginPage.login();
});

test('Create new contact', async ({page}) => {
    let contactsPage = new ContactsPage(page);
    await contactsPage.addContact.click();
    await contactsPage.createNewContact(contactTestData.allValidData);
    await contactsPage.submit.click();
    await expect(page).toHaveTitle('My Contacts');
    await expect(page.locator('H1')).toHaveText('Contact List');
});

test.afterEach(async ({page}) => {
    // Logout from application
    let contactsPage = new ContactsPage(page);
    await contactsPage.logoutFromApp();
});