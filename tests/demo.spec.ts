import { test, expect } from '../fixtures/baseFixture';
import { openApplication } from '../setup/TestHooks';

openApplication();

test.describe('Home Page', () => {

    test('Verify Home Page is displayed', async ({ app }) => {

        const isHomePageDisplayed =
            await app.getHomePage().isHomePageExists();

        expect(isHomePageDisplayed).toBeTruthy();

    });

});