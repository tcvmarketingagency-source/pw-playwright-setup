import { test, expect } from '@playwright/test';

/**
 * TEST METADATA
 * purpose: smoke
 * priority: P0
 * signal: functional
 */

test.describe('Public Homepage — Smoke Tests', () => {

  test(
    'homepage loads correctly',
    {
      tag: ['@smoke', '@critical', '@functional'],
    },
    async ({ page }, testInfo) => {

      // 🔹 Signal metadata (Phoenix + future AI agents)
      testInfo.annotations.push(
        { type: 'signal', description: 'functional' },
        { type: 'priority', description: 'P0' },
        { type: 'owner', description: 'ci-smoke' }
      );

      await test.step('Open homepage', async () => {
        await page.goto('https://example.com');
      });

      await test.step('Verify page title', async () => {
        await expect(page).toHaveTitle(/Example/);
      });
    }
  );

});