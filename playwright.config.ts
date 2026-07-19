import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Global timeout for each test (30 seconds)
  timeout: 30 * 1000,

  // Execution settings
  fullyParallel: false,
  retries: 1,
  workers: 1,

  // Reporters
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list'],
  ],

  use: {
    // Browser settings
    viewport: {
      width: 1280,
      height: 720,
    },

    // Capture artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    // Browser options
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],

    // Uncomment if needed
    // headless: false,
  },

  // Run only tests with @master tag
  // grep: /@master/,

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    /*
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    */
  ],

  // Uncomment for CI
  // retries: process.env.CI ? 2 : 1,
  // workers: process.env.CI ? 1 : undefined,
});