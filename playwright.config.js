const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    viewport: { width: 1280, height: 800 },
    navigationTimeout: 30000,
    actionTimeout: 10000,
    headless: false,
  },
});
