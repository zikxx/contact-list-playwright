// @ts-check
const {test, expect} = require('@playwright/test');
const {LoginPage} = require("../../ui/LoginPage");

test.beforeEach(async ({page}, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto(process.env.BASEURL);
});

test('Login with valid credentials', async ({page}) => {
    let loginPage = new LoginPage(page);

    await expect(page).toHaveTitle('Contact List App');
    await loginPage.login();

    await expect(page).toHaveTitle('My Contacts');
    await expect(page.locator('H1')).toHaveText('Contact List');
});

test('Login with invalid credentials', async ({page}) => {
    let loginPage = new LoginPage(page);

    await expect(page).toHaveTitle('Contact List App');
    await loginPage.loginWithCustomCredentials('asd', 'asd');

    await expect(loginPage.errorMessage).toHaveText('Incorrect username or password');
});