import { test, expect } from '@playwright/test';

test.describe('Auth Navigation Signals', () => {
  test('auth page loads correctly', async ({ page }) => {

    // 🔔 Signal 1: navigation start
    console.log('signal:navigation_start');

    await page.goto('https://example.com/login');

    // 🔔 Signal 2: auth heading visible
    await expect(page.locator('h1')).toContainText(/login|sign in|example/i);
    console.log('signal:auth_heading_visible');

    // 🔔 Signal 3: page fully ready
    await expect(page).toHaveURL(/login/);
    console.log('signal:auth_page_ready');
  });
});