const { test, expect } = require('@playwright/test');

test('Local HTML test (guaranteed pass)', async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1 id="title">Hello Playwright</h1>
        <button id="btn">click me</button>
      </body>
    </html>
  `);

  await expect(page.locator('#title')).toHaveText('Hello Playwright');
  await expect(page.locator('#btn')).toBeVisible();
});
