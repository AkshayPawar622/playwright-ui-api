import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { TestConfig } from '../test.config';

test('User should register a new account successfully', async ({ page }) => {
    const testConfig = new TestConfig();
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);
    const uniqueEmail = `playwright.user.${Date.now()}@example.com`;

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
            'User',
            uniqueEmail,
            '9876543210',
            'Password@123',
            false
        );
    });

    await test.step('Verify successful registration', async () => {
        await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();
    });
});
