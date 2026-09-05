import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { loginData } from '../src/test_data/testdata';
import { url } from 'inspector';

//onst testdata: any = readExcelData();
//const baseData = testdata[0];

test.describe('Access to DemoQA site', ()=> {
  test('Login Test', async ({ page, context }) => {
    const loginCheck = new LoginPage(page);
    const loginURL = loginData.loginurl;
    await loginCheck.demoQAloginpage(loginURL, loginData.username, loginData.password);

})
})