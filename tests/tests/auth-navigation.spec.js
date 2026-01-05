import { test, expect } from "@playwright/test";

/**
 * 🔔 Test Signal Helper (Phase 3 – Intelligent Test Architecture)
 * These signals are consumed by CI logs + Phoenix tracing
 */
function signal(name, meta = {}) {
  console.log(`SIGNAL::${name}`, meta);
}

test.describe("Auth Navigation Signals", () => {
  test("auth page loads correctly", async ({ page }) => {
    // 🚦 Signal 1: navigation started
    signal("auth_navigation_start");

    // Navigate to login page
    await page.goto("https://example.com/login");
    signal("auth_page_loaded", { url: page.url() });

    // Validate heading
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    signal("auth_heading_visible");

    // Validate URL correctness
    await expect(page).toHaveURL(/login/);
    signal("auth_url_verified");

    // ✅ Final success signal
    signal("auth_page_ready");
  });
});