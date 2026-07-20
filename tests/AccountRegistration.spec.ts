/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */

import { test, expect } from '../fixtures/baseFixture';
import { randomDataGenerator } from '../utils/randomDataGenerator';
import { openApplication } from '../setup/TestHooks';

openApplication();


test('User registration test @master @sanity @regression', async ({ app }) => {

    const homePage = app.getHomePage();
    const registrationPage = app.getRegistrationPage();

    //Go to 'My Account' and click 'Register'

    await homePage.clickMyAccount();
    await homePage.clickRegister();

    //Fill in registration details with random data
    await registrationPage.setFirstName(randomDataGenerator.getFirstName());
    await registrationPage.setLastName(randomDataGenerator.getlastName());
    await registrationPage.setEmail(randomDataGenerator.getEmail());
    await registrationPage.setTelephone(randomDataGenerator.getPhoneNumber());

    const password = randomDataGenerator.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //Validate the confirmation message

    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')


})
