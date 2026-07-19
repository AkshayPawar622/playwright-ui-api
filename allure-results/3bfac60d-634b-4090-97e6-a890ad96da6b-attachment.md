# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> User should register and log in with the same account
- Location: tests\EndToEndTest.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'My Account' })
Expected: visible
Error: strict mode violation: getByRole('heading', { name: 'My Account' }) resolved to 2 elements:
    1) <h2>My Account</h2> aka locator('#content').getByRole('heading', { name: 'My Account' })
    2) <h5>My Account</h5> aka getByRole('contentinfo').getByRole('heading', { name: 'My Account' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'My Account' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "naveenopencart" [ref=e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "My Account" [level=2] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "Edit your account information" [ref=e77] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - listitem [ref=e78]:
            - link "Change your password" [ref=e79] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - listitem [ref=e80]:
            - link "Modify your address book entries" [ref=e81] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - listitem [ref=e82]:
            - link "Modify your wish list" [ref=e83] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - link "View your order history" [ref=e87] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - listitem [ref=e88]:
            - link "Downloads" [ref=e89] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - listitem [ref=e90]:
            - link "Your Reward Points" [ref=e91] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - listitem [ref=e92]:
            - link "View your return requests" [ref=e93] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - listitem [ref=e94]:
            - link "Your Transactions" [ref=e95] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - listitem [ref=e96]:
            - link "Recurring payments" [ref=e97] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - link "Register for an affiliate account" [ref=e101] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=e105] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - complementary [ref=e106]:
        - generic [ref=e107]:
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Edit Account" [ref=e109] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
          - link "Password" [ref=e110] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/password
          - link "Address Book" [ref=e111] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e112] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e113] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e114] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e115] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e116] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e117] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e118] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e119] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
          - link "Logout" [ref=e120] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/logout
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "Information" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e129]:
              - link "Delivery Information" [ref=e130] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e133]:
              - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e135]:
          - heading "Customer Service" [level=5] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Us" [ref=e139] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e140]:
              - link "Returns" [ref=e141] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e142]:
              - link "Site Map" [ref=e143] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e144]:
          - heading "Extras" [level=5] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Brands" [ref=e148] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e149]:
              - link "Gift Certificates" [ref=e150] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
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
  51 |         await expect(page).toHaveURL(/route=account\/account/);
> 52 |         await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
     |                                                                         ^ Error: expect(locator).toBeVisible() failed
  53 |     });
  54 | 
  55 |     await test.step('Keep the logged-in account page visible', async () => {
  56 |         await page.waitForTimeout(5000);
  57 |     });
  58 | });
  59 | 
```