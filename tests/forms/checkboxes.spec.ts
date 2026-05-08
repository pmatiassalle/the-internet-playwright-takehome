import { expect, test } from "@playwright/test";

test.describe("Checkboxes", () => {
  test("should verify default states and toggle both checkboxes", async ({ page }) => {
    await page.goto("/checkboxes");

    const checkboxes = page.locator("#checkboxes input[type='checkbox']");
    await expect(checkboxes).toHaveCount(2);

    const firstCheckbox = checkboxes.nth(0);
    const secondCheckbox = checkboxes.nth(1);

    // Initial state: first unchecked, second checked.
    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    await firstCheckbox.click();
    await expect(firstCheckbox).toBeChecked();

    await secondCheckbox.click();
    await expect(secondCheckbox).not.toBeChecked();
  });
});
