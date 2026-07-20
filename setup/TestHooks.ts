import { test } from '../fixtures/baseFixture';
import { config } from '../config/TestConfig';

/**
 * Opens the application before every test
 */
export function openApplication(): void {

    test.beforeEach(async ({ page }) => {

        await page.goto(config.appUrl);

    });

}