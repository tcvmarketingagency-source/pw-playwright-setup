import { test, expect } from '@playwright/test';

test.describe('Auth Navigation Signals', () => {

  test('auth page loads correctly', async ({ page }) => {

    // 🔹 SIGNAL 1: Navigation
    await test.step('signal:navigation:auth_page_open', async () => {
      await page.goto('https://example.com');
      await expect(page).toHaveURL(/example\.com/);
    });

    // 🔹 SIGNAL 2: Content
    await test.step('signal:content:auth_heading_visible', async () => {
      const heading = page.locator('h1');
      await expect(heading).toHaveText('Example Domain');
    });

    // 🔹 SIGNAL 3: Stability
    await test.step('signal:stability:no_page_crash', async () => {
      await expect(page).not.toHaveTitle(/error|failed|crash/i);
    });

  });

});