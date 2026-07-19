import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';

test('User should log in successfully', async ({ page }) => {
    const testConfig = new TestConfig();
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await test.step('Launch the application', async () => {
        await page.goto(testConfig.appUrl);
    });

    await test.step('Navigate to the login page', async () => {
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        await expect(page).toHaveURL(/route=account\/login/);
    });

    await test.step('Log in with the configured user', async () => {
        await loginPage.login(testConfig.email, testConfig.password);
    });

    await test.step('Verify successful login', async () => {
        await expect(page).toHaveURL(/route=account\/account/);
        await expect(page.getByRole('heading', { name: 'My Account', level: 2 })).toBeVisible();
    });
});
