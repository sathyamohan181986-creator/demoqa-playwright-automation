import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 60_000,              // whole test timeout (default 30s → increase to 60s)
  expect: {
    timeout: 10_000,            // assertion timeout (toHaveTitle, toBeVisible etc.)
  },
  use: {
    actionTimeout: 15_000,      // per action (.click, .fill etc.)
    navigationTimeout: 30_000,  // page.goto() timeout
  },
  reporter: [
  ['html', { open: 'always', outputFolder: 'playwright-report' }],
],
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] }}
  ]
});
