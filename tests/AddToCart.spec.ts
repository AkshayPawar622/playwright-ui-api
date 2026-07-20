/**
 * Test Case: Add Product to Cart
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click the search button
 * 4. Verify the product appears in the search results
 * 5. Select the product
 * 6. Set quantity
 * 7. Add the product to the cart
 * 8. Verify the success message
 */

import { test, expect } from '../fixtures/baseFixture';
import { config } from '../config/TestConfig';
import { openApplication } from '../setup/TestHooks';

openApplication();

test('Add product to cart test @master @regression', async ({ app }) => {
  const homePage = app.getHomePage();
  const searchResultsPage = app.getSearchResultsPage();
  const productPage = app.getProductPage();
  // Step 2: Enter product name in search box
  await homePage.enterProductName(config.productName);

  // Step 3: Click the search button
  await homePage.clickSearch();

  // Step 4: Verify search results page is displayed
  expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

  // Step 5: Verify that the product exists in the results
  const productName = config.productName;
  expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();

  // Step 6-7-8: Select product → Set quantity → Add to cart → Verify confirmation
  await searchResultsPage.selectProduct(productName);
  await productPage.setQuantity(config.productQuantity); // Set quantity
  await productPage.addToCart();                         // Add to cart

  // Step 8: Assert success message is visible
  expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
});
