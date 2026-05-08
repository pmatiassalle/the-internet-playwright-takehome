import { test } from "@playwright/test";
import { loginCases } from "../../test-data/loginCases";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Form Authentication login", () => {
  for (const loginCase of loginCases) {
    test(`should ${loginCase.expected.outcome === "success" ? "log in successfully with" : "show an error for"} ${loginCase.name} credentials`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(loginCase.username, loginCase.password);

      if (loginCase.expected.outcome === "success") {
        await loginPage.expectSuccess(loginCase.expected.message);
        return;
      }

      await loginPage.expectLoginError(loginCase.expected.message);
    });
  }
});
