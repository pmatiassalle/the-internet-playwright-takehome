import { expect, test } from "@playwright/test";

test.describe("Dynamic Loading - Example 1", () => {
  test("should display Hello World after the loading indicator disappears", async ({ page }) => {
    await page.goto("/dynamic_loading/1");

    const startButton = page.getByRole("button", { name: "Start" });
    const loadingIndicator = page.locator("#loading");
    const finishText = page.locator("#finish");

    await expect(finishText).toBeHidden();
    await startButton.click();

    // Web-first checks: ensure loading phase occurred, then completed.
    await expect(loadingIndicator).toBeVisible();
    await expect(loadingIndicator).toBeHidden();

    await expect(finishText).toHaveText("Hello World!");
    await expect(finishText).toBeVisible();
  });
});
