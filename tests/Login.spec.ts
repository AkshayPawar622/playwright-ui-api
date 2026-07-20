/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */

import { test, expect } from '../fixtures/baseFixture';
import { config } from '../config/TestConfig';
import { openApplication } from '../setup/TestHooks';

openApplication();


test('User login test @master @sanity @regression',async({ app })=>{
    const homePage = app.getHomePage();
    const loginPage = app.getLoginPage();
    const myAccountPage = app.getMyAccountPage();

    //Navigate to Login page via Home page

    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter valid credentials and log in
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

    //alternatevly
    //await loginPage.login(config.email,config.password);

    //Verify successful login by checking 'My Account' page presence
    const isLoggedIn=await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();

})
