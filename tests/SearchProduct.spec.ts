/**
 * Test Case: Product Search
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Enter the product name in the search field
 * 3) Click the search button
 * 4) Verify if the product is displayed in the search results
 */

import { test, expect } from '../fixtures/baseFixture';
import { config } from '../config/TestConfig';
import { openApplication } from '../setup/TestHooks';

openApplication();

test('Product search test @master @regression', async ({ app }) => {
  const homePage = app.getHomePage();
  const searchResultsPage = app.getSearchResultsPage();
  const productName = config.productName;

  // Step 2 & 3: Enter product name and click Search
  await homePage.enterProductName(productName);
  await homePage.clickSearch();

  // Step 4: Verify that the search results page is displayed
  expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

  // Step 5: Validate if the searched product appears in results
  const isProductFound = await searchResultsPage.isProductExist(productName);
  expect(isProductFound).toBeTruthy();
});
