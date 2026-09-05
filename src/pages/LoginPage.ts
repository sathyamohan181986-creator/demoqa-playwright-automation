import { expect, Page } from '@playwright/test';
import { logindemoQA } from '../locators/DemoQA';
import { loginData } from '../test_data/testdata';

export class LoginPage {constructor(private page: Page) {}

//Navigate to DemoQA URL
  async demoQAloginpage(url: string, username: string, password: string) {
    await this.page.goto(url);
 
    const loginUser = logindemoQA(this.page);
    await loginUser.userName.fill(username);
    await loginUser.password.fill(password);
    await this.page.screenshot({ path: 'screenshots/loginpage.png', fullPage: true });
    await loginUser.loginbtn.click();
    await this.page.waitForTimeout(5000);
    await this.page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });
    //await registerPage.registerbtn.click();
  }
}