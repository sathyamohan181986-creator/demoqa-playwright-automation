import { expect, Page } from '@playwright/test';
import { logindemoQA, bookStore } from '../locators/DemoQA';
import { loginData, bookStoreData } from '../test_data/testdata';

export class SearchBooks {
  constructor(private page: Page) {}

  async bookStore(url: string) {
    await this.page.goto(url);
  }

  async searchBook(searchbook: string) {
    const bookSearch = bookStore(this.page); // your existing locator factory — unchanged

    await bookSearch.searchBox.fill(searchbook);
    await bookSearch.clicksearch.click();
    await this.page.getByRole('link', { name: 'Git Pocket Guide' }).click();
    

    // --- Add to Collection ---
    const [addDialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      bookSearch.addToCollection.click(),
    ]);
    //await this.page.pause();
    const addMessage = addDialog.message();
    console.log('Add dialog message:', addMessage);

    const expectedAddMessages = [
      'Book added to your collection.',
      'Book already present in the your collection!',
    ];
    expect(expectedAddMessages).toContain(addMessage);

    await addDialog.accept();

    await this.page.screenshot({ path: 'screenshots/bookstorepage.png', fullPage: true });
        // --- Delete from Collection --- (this is the call you were missing)
    await this.deleteBook(searchbook);
  }
    // --- Delete from Collection ---
   async deleteBook(bookTitle: string) {
  await this.page.goto('https://demoqa.com/profile');
  await this.page.waitForLoadState('networkidle');

  const bookRow = this.page.locator(`tr:has-text("${bookTitle}")`);
  const deleteIcon = bookRow.locator('[id^="delete-record-"]');

  await expect(deleteIcon).toBeVisible({ timeout: 10000 });
  await deleteIcon.click();

  // This is a real HTML modal, not a native browser dialog — no dialog event involved
  const modal = this.page.getByRole('dialog'); // Bootstrap modals expose role="dialog"

  await expect(modal.getByText('Do you want to delete this book?')).toBeVisible();

  const message = await modal.getByText('Do you want to delete this book?').textContent();
  console.log('Delete modal message:', message);

  await modal.getByRole('button', { name: 'OK', exact: true }).click();

  await expect(bookRow).toHaveCount(0);
  await this.page.screenshot({ path: 'screenshots/after-delete.png', fullPage: true });
}}