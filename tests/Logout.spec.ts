/**
 * Test Case: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */

import { test, expect } from '../fixtures/baseFixture';
import { config } from '../config/TestConfig';
import { openApplication } from '../setup/TestHooks';

openApplication();

test('User logout test @master @regression', async ({ app }) => {
  const homePage = app.getHomePage();
  const loginPage = app.getLoginPage();
  const myAccountPage = app.getMyAccountPage();
  const logoutPage = app.getLogoutPage();
  // Step 2: Navigate to Login page
  await homePage.clickMyAccount();
  await homePage.clickLogin();

  // Step 3: Perform login using valid credentials
  await loginPage.login(config.email, config.password);

  // Step 4: Verify successful login
  expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();

  // Step 5: Click Logout, which returns LogoutPage instance
  await myAccountPage.clickLogout();

  // Step 6: Verify "Continue" button is visible before clicking
  expect(await logoutPage.isContinueButtonVisible()).toBe(true);

  // Step 7: Click Continue and verify redirection to HomePage
  await logoutPage.clickContinue();
  expect(await homePage.isHomePageExists()).toBe(true);
});
