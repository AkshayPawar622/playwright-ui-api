# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> Home Page >> Verify Home Page is displayed
- Location: tests\demo.spec.ts:8:9

# Error details

```
Error: page.goto: net::ERR_NETWORK_ACCESS_DENIED at https://naveenautomationlabs.com/opencart/
Call log:
  - navigating to "https://naveenautomationlabs.com/opencart/", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '../fixtures/baseFixture';
  2  | import { config } from '../config/TestConfig';
  3  | 
  4  | /**
  5  |  * Opens the application before every test
  6  |  */
  7  | export function openApplication(): void {
  8  | 
  9  |     test.beforeEach(async ({ page }) => {
  10 | 
> 11 |         await page.goto(config.appUrl);
     |                    ^ Error: page.goto: net::ERR_NETWORK_ACCESS_DENIED at https://naveenautomationlabs.com/opencart/
  12 | 
  13 |     });
  14 | 
  15 | }
```