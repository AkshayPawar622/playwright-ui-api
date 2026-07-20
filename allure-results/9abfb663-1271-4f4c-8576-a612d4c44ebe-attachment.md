# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> User should register and log in with the same account
- Location: tests\EndToEndTest.spec.ts:7:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /route=account\/account/
Received string:  "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://naveenautomationlabs.com/opencart/index.php?route=account/login"

```

```yaml
- navigation:
  - button "$ Currency ":
    - strong: $
    - text: Currency 
  - list:
    - listitem:
      - link "":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
      - text: "123456789"
    - listitem:
      - link " My Account":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
    - listitem:
      - link " Wish List (0)":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
    - listitem:
      - link " Shopping Cart":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
    - listitem:
      - link " Checkout":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
- banner:
  - link "naveenopencart":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
    - img "naveenopencart"
  - textbox "Search"
  - button ""
  - button " 0 item(s) - $0.00"
- navigation:
  - list:
    - listitem:
      - link "Desktops":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
    - listitem:
      - link "Laptops & Notebooks":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
    - listitem:
      - link "Components":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
    - listitem:
      - link "Tablets":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
    - listitem:
      - link "Software":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
    - listitem:
      - link "Phones & PDAs":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
    - listitem:
      - link "Cameras":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
    - listitem:
      - link "MP3 Players":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
- list:
  - listitem:
    - link "":
      - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
  - listitem:
    - link "Account":
      - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
  - listitem:
    - link "Login":
      - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
- text: " Warning: No match for E-Mail Address and/or Password."
- heading "New Customer" [level=2]
- paragraph:
  - strong: Register Account
- paragraph: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
- link "Continue":
  - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
- heading "Returning Customer" [level=2]
- paragraph:
  - strong: I am a returning customer
- text: E-Mail Address
- textbox "E-Mail Address": playwright.e2e.1784476345974@example.com
- text: Password
- textbox "Password": Password@123
- link "Forgotten Password":
  - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
- button "Login"
- complementary:
  - link "Login":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
  - link "Register":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
  - link "Forgotten Password":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
  - link "My Account":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
  - link "Address Book":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
  - link "Wish List":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
  - link "Order History":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
  - link "Downloads":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
  - link "Recurring payments":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
  - link "Reward Points":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
  - link "Returns":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
  - link "Transactions":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
  - link "Newsletter":
    - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
- contentinfo:
  - heading "Information" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
    - listitem:
      - link "Delivery Information":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
    - listitem:
      - link "Privacy Policy":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
    - listitem:
      - link "Terms & Conditions":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
  - heading "Customer Service" [level=5]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
    - listitem:
      - link "Returns":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
    - listitem:
      - link "Site Map":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
  - heading "Extras" [level=5]
  - list:
    - listitem:
      - link "Brands":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
    - listitem:
      - link "Gift Certificates":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
    - listitem:
      - link "Affiliate":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
    - listitem:
      - link "Specials":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
  - heading "My Account" [level=5]
  - list:
    - listitem:
      - link "My Account":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
    - listitem:
      - link "Order History":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
    - listitem:
      - link "Wish List":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
    - listitem:
      - link "Newsletter":
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
  - separator
  - paragraph:
    - text: Powered By
    - link "OpenCart":
      - /url: http://www.opencart.com
    - text: naveenopencart © 2026
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { HomePage } from '../pages/HomePage';
  3  | import { LoginPage } from '../pages/LoginPage';
  4  | import { RegistrationPage } from '../pages/RegistrationPage';
  5  | import { TestConfig } from '../test.config';
  6  | 
  7  | test('User should register and log in with the same account', async ({ page }) => {
  8  |     const testConfig = new TestConfig();
  9  |     const homePage = new HomePage(page);
  10 |     const registrationPage = new RegistrationPage(page);
  11 |     const loginPage = new LoginPage(page);
  12 |     const email = `playwright.e2e.${Date.now()}@example.com`;
  13 |     const password = 'Password@123';
  14 | 
  15 |     await test.step('Launch the application', async () => {
  16 |         await page.goto(testConfig.appUrl);
  17 |     });
  18 | 
  19 |     await test.step('Navigate to the registration page', async () => {
  20 |         await homePage.clickMyAccount();
  21 |         await homePage.clickRegisterLnk();
  22 | 
  23 |         await expect(page).toHaveURL(/route=account\/register/);
  24 |     });
  25 | 
  26 |     await test.step('Register a new user', async () => {
  27 |         await registrationPage.registerAccount(
  28 |             'Playwright',
  29 |             'EndToEnd',
  30 |             email,
  31 |             '9876543210',
  32 |             password,
  33 |             false
  34 |         );
  35 | 
  36 |         await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();
  37 |     });
  38 | 
  39 |     await test.step('Log out of the newly created account', async () => {
  40 |         await homePage.clickMyAccount();
  41 |         await homePage.clickLogout();
  42 | 
  43 |         await expect(page).toHaveURL(/route=account\/logout/);
  44 |     });
  45 | 
  46 |     await test.step('Log in with the newly registered user', async () => {
  47 |         await homePage.clickMyAccount();
  48 |         await homePage.clickLogin();
  49 |         await loginPage.login(email, password);
  50 | 
> 51 |         await expect(page).toHaveURL(/route=account\/account/);
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  52 |         await expect(page.getByRole('heading', { name: 'My Account', level: 2 })).toBeVisible();
  53 |     });
  54 | 
  55 |     await test.step('Keep the logged-in account page visible', async () => {
  56 |         await page.waitForTimeout(15000);
  57 |     });
  58 | 
  59 | 
  60 |     
  61 | });
  62 | 
```