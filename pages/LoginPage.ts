import { expect, type Page } from "@playwright/test";

export class LoginPage {
  constructor(private readonly page: Page) {}

  private readonly usernameInput = this.page.getByLabel("Username");
  private readonly passwordInput = this.page.getByLabel("Password");
  private readonly loginButton = this.page.getByRole("button", { name: "Login" });
  private readonly flashMessage = this.page.locator("#flash");

  async goto(): Promise<void> {
    await this.page.goto("/login");
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectSuccess(message: string): Promise<void> {
    await expect(this.page).toHaveURL(/\/secure$/);
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText(message);
    await expect(this.page.locator("h2", { hasText: "Secure Area" })).toBeVisible();
  }

  async expectLoginError(message: string): Promise<void> {
    await expect(this.page).toHaveURL(/\/login$/);
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText(message);
  }
}
