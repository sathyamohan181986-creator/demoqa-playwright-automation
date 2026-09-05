import { expect, Page } from '@playwright/test';
import { logindemoQA, bookStore } from '../locators/DemoQA';
import { bookStoreData } from '../test_data/testdata';


export class SearchBooks {constructor(private page: Page) {}
  async demoQAloginpage(url: string) {
    await this.page.goto(url);
  }

  async bookStore(url: string) {
    await this.page.goto(url);
}
  async searchBook(searchbook: string) {
    const bookSearch = bookStore(this.page);
   // await this.page.pause();
    await bookSearch.searchBox.fill(searchbook);
    await bookSearch.clicksearch.click();
    await this.page.getByRole('link', { name: 'Git Pocket Guide' }).click();
// Register BEFORE the action that triggers the dialog
    await this.page.once('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept(); // equivalent to clicking OK
  });

    await bookSearch.addToCollection.click(); // this is what opens the alert
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: 'screenshots/bookstorepage.png', fullPage: true });
}
  } 

