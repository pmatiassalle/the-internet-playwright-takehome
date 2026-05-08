import { expect, type Page } from "@playwright/test";

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async assertLoaded(): Promise<void> {
    await expect(this.page.getByRole("heading", { name: "Welcome to the-internet" })).toBeVisible();
  }

  async openLinkByName(name: string): Promise<void> {
    await this.page.getByRole("link", { name }).click();
  }
}
