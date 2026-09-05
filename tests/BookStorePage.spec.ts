import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { SearchBooks } from '../src/pages/BookStorePage';
import { loginData, bookStoreData } from '../src/test_data/testdata';


test.describe('Access to DemoQA site', ()=> {
  test('Search Book Test', async ({ page, context }) => {

    const loginCheck = new LoginPage(page);
    const loginURL = loginData.loginurl;
    await loginCheck.demoQAloginpage(loginURL, loginData.username, loginData.password);

    const bookStoreCheck = new SearchBooks(page);
    await bookStoreCheck.bookStore(bookStoreData.bookstoreurl);
    await bookStoreCheck.searchBook(bookStoreData.bookName1);
  
 })
})

  /**/