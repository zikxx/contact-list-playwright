// @ts-check
const {test} = require('@playwright/test'),
    User = require("../../api/User"),
    user = new User(),
    Contact = require("../../api/Contacts"),
    contact = new Contact(),
    newContact = require('../../data/contactTestData').newContactApi;

test('API Example', async () => {
    await user.login(process.env.EMAIL, process.env.PASSWORD)
    const createContactResponse = await contact.addContact(newContact);
    await contact.getContact(createContactResponse._id);
    await contact.deleteAllContacts();
    await user.logout();
});