/**
 * Test Case: End-to-End Test on Demo E-commerce Application
 *
 * Purpose:
 * This test simulates a complete user flow on an e-commerce site.
 * 
 * Steps:
 * 1) Register a new account
 * 2) Logout after registration
 * 3) Login with the same account
 * 4) Search for a product and add it to the shopping cart
 * 5) Verify cart contents
 * 6) Attempt checkout (disabled since feature isn't available on demo site)
 */

import { test, expect } from '../fixtures/baseFixture';
import { Application } from '../pageManager/Application';
import { randomDataGenerator } from '../utils/randomDataGenerator';
import { config } from '../config/TestConfig';
import { openApplication } from '../setup/TestHooks';

openApplication();

// This is the main test block that runs the entire flow
test('execute end-to-end test flow @end-to-end', async ({ app }) => {

    // Step 1: Register a new account and capture the generated email
    let registeredEmail: string = await performRegistration(app);
    console.log("✅ Registration is completed!");

    // Step 2: Logout after successful registration
    await performLogout(app);
    console.log("✅ Logout is completed!");

    // Step 3: Login with the registered email
    await performLogin(app, registeredEmail);
    console.log("✅ Login is completed!");

    // Step 4: Search for a product and add it to the cart
    await addProductToCart(app);
    console.log("✅ Product added to cart!");

    // Step 5: Verify the contents of the shopping cart
    await verifyShoppingCart(app);
    console.log("✅ Shopping cart verification completed!");

    // Step 6: Perform checkout (skipped for demo site)
    // await performCheckout(app);
});


// Function to register a new user account
async function performRegistration(app: Application): Promise<string> {
    const homePage = app.getHomePage();
    await homePage.clickMyAccount();       // Click "My Account" link
    await homePage.clickRegister();        // Click "Register" option

    const registrationPage = app.getRegistrationPage();

    // Fill in random user details
    await registrationPage.setFirstName(randomDataGenerator.getFirstName());
    await registrationPage.setLastName(randomDataGenerator.getlastName());

    let email: string = randomDataGenerator.getEmail();
    await registrationPage.setEmail(email);
    await registrationPage.setTelephone(randomDataGenerator.getPhoneNumber());

    await registrationPage.setPassword("test123");
    await registrationPage.setConfirmPassword("test123");

    await registrationPage.setPrivacyPolicy();  // Accept the privacy policy
    await registrationPage.clickContinue();     // Submit the registration form

    // Validate that the registration was successful
    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!');

    return email; // Return the email for later use in login
}


// Function to log out the current user
async function performLogout(app: Application) {
    const myAccountPage = app.getMyAccountPage();
    const logoutPage = app.getLogoutPage();
    await myAccountPage.clickLogout();

    // Ensure the "Continue" button is visible
    expect(await logoutPage.isContinueButtonVisible()).toBe(true);

    // Click "Continue" and verify redirection to HomePage
    const homePage = app.getHomePage();
    await logoutPage.clickContinue();
    expect(await homePage.isHomePageExists()).toBe(true);
}


// Function to log in using the registered email
async function performLogin(app: Application, email: string) {
    const homePage = app.getHomePage();
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    const loginPage = app.getLoginPage();
    await loginPage.login(email, "test123");  // Use the registered credentials

    // Verify login by checking My Account page
    const myAccountPage = app.getMyAccountPage();
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
}


// Function to search for a product and add it to cart
async function addProductToCart(app: Application) {
    const homePage = app.getHomePage();
    const productName: string = config.productName;
    const productQuantity: string = config.productQuantity;

    await homePage.enterProductName(productName);
    await homePage.clickSearch();  // Click on search button

    const searchResultsPage = app.getSearchResultsPage();

    // Validate search results page
    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

    // Validate that the desired product exists in the results
    expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();

    // Select product and set quantity
    await searchResultsPage.selectProduct(productName);
    const productPage = app.getProductPage();
    await productPage.setQuantity(productQuantity);
    await productPage.addToCart();  // Add product to shopping cart

    // Confirm product was added
    expect(await productPage.isConfirmationMessageVisible()).toBe(true);
}


// Function to verify the shopping cart details
async function verifyShoppingCart(app: Application) {
    const productPage = app.getProductPage();

    // Navigate to shopping cart from product page
    await productPage.clickItemsToNavigateToCart();
    const shoppingCartPage = app.getShoppingCartPage();
    await productPage.clickViewCart();

    console.log("🛒 Navigated to shopping cart!");

    // Validate that total price is correct (based on config)
    expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
}


// Function to perform checkout (disabled for demo site)
async function performCheckout(app: Application) {
    // Checkout feature is not implemented since it's a demo site.
    // Place your checkout flow logic here if backend is available.
}
