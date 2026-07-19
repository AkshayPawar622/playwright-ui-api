import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { TestConfig } from '../test.config';

test('User should register and log in with the same account', async ({ page }) => {
    const testConfig = new TestConfig();
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);
    const email = `playwright.e2e.${Date.now()}@example.com`;
    const password = 'Password@123';

    await test.step('Launch the application', async () => {
        await page.goto(testConfig.appUrl);
    });

    await test.step('Navigate to the registration page', async () => {
        await homePage.clickMyAccount();
        await homePage.clickRegisterLnk();

        await expect(page).toHaveURL(/route=account\/register/);
    });

    await test.step('Register a new user', async () => {
        await registrationPage.registerAccount(
            'Playwright',
            'EndToEnd',
            email,
            '9876543210',
            password,
            false
        );

        await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();
    });

    await test.step('Log out of the newly created account', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogout();

        await expect(page).toHaveURL(/route=account\/logout/);
    });

    await test.step('Log in with the newly registered user', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogin();
        await loginPage.login(email, password);

        await expect(page).toHaveURL(/route=account\/account/);
        await expect(page.getByRole('heading', { name: 'My Account', level: 2 })).toBeVisible();
    });

    await test.step('Keep the logged-in account page visible', async () => {
        await page.waitForTimeout(15000);
    });


    
});
