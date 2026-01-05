import { test, expect } from "@playwright/test";

/**
 * Structured signal emitter
 * Phoenix + AI friendly
 */
function signal(name, meta = {}) {
  console.log(
    "SIGNAL_EVENT",
    JSON.stringify({
      signal: name,
      phase: "auth",
      severity: meta.severity || "info",
      meta,
      timestamp: new Date().toISOString(),
    })
  );
}

test.describe("Auth Navigation Signals", () => {
  test("auth page loads correctly", async ({ page }) => {

    // Signal 1: navigation started
    signal("auth_navigation_start", {
      intent: "user_auth_flow_started",
    });

    await page.goto("https://example.com/login");

    // Signal 2: page reached
    signal("auth_page_reached", {
      url: page.url(),
    });

    // Stable assertion (Example Domain page)
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();

    // Signal 3: page ready (AFTER assertion)
    signal("auth_page_ready", {
      headingText: await heading.textContent(),
      status: "ready",
      severity: "success",
    });
  });
});