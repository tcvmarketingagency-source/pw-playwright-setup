const { test, expect } = require('@playwright/test');
const { execSync } = require('child_process');

test('homepage loads', async ({ page }) => {

  // 🔥 Phoenix trace trigger
  execSync(`python3 - << 'EOF'
from phoenix_tracer import log_test_start
log_test_start("homepage loads")
EOF`);

  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
