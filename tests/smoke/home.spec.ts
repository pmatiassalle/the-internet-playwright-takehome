import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("The Internet home page", () => {
  test("should load and display the main heading", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.assertLoaded();
    await expect(page).toHaveURL(/the-internet\.herokuapp\.com\/?$/);
  });

  test("should navigate to Form Authentication page", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.openLinkByName("Form Authentication");
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole("heading", { name: "Login Page" })).toBeVisible();
  });
});
