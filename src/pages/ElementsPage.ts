import { expect, Page } from '@playwright/test';
import { demohomepage, elementslocator } from '../locators/DemoQA';
import { fillElementsPage } from '../test_data/testdata';
import { readExcelData } from '@utils/excelreader';


export class ElementsPage {constructor(private page: Page) {}

//Navigate to DemoQA URL & ElementsCard
  async clickElementsCard(demoQAURL: string){
    await this.page.goto(demoQAURL);
    await this.page.screenshot({ path: 'screenshots/demoQAhomepage.png', fullPage: true });
    const elementscard = demohomepage(this.page);
    await elementscard.elements.waitFor({ state: 'visible', timeout: 15000 });
    await elementscard.elements.click();
    await this.page.screenshot({ path: 'screenshots/elementsCard.png', fullPage: true });
    await elementscard.textBox.click();
    await this.page.screenshot({ path: 'screenshots/textBoxElements.png', fullPage: true });
  }

//Fill the value in Text Box Elements page
  async textBoxElts(fullName: string, emailId: string, currAdd: string, permAdd: string) {
    const elementsloc = elementslocator(this.page);
    await elementsloc.fullName.fill(fullName);
    await elementsloc.email.fill(emailId);
    await elementsloc.curradd.fill(currAdd);
    await elementsloc.permadd.fill(permAdd);
    await this.page.screenshot({ path: 'screenshots/textBoxElements_filled.png', fullPage: true });
    await elementsloc.submitbtn.click();
    await (expect)
  }

//Assert the values of the Text Box Elements page
  async assertOutputvalues(fullName: string, emailId: string, currAdd: string, permAdd: string): Promise<void> {
    const elementsloc = elementslocator(this.page);
    const OUTPUT = await expect(elementsloc.output).toBeVisible();
    await expect(elementsloc.Name_OUTPUT).toContainText(fullName);
    console.log('✅ Full Name Assertion  : ' + fullName + ' - PASS');
    await expect(elementsloc.email_OUTPUT).toContainText(emailId);
    console.log('✅ Email Assertion  : ' + emailId + ' - PASS');
    await expect(elementsloc.curradd_OUTPUT).toContainText(currAdd);
    console.log('✅ Current Address  : ' + currAdd + ' - PASS');
    await expect(elementsloc.permadd_OUTPUT).toContainText(permAdd);
    console.log('✅ Permanent Address  : ' + permAdd + ' - PASS');

  }
/*
// Assert invalid email - field highlighted with red border
  async assertInvalidEmail(): Promise<void> {
    const elementsloc = elementslocator(this.page);
  
// Assert the red border color on email field
    await expect(elementsloc.email).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    console.log('✅ Invalid Email Assertion  : Email field highlighted with red border - PASS');
  
// OR assert by checking the field has 'error' class (inspect element to confirm)
    await expect(elementsloc.email).toHaveClass(/error/);
  
    console.log('✅ Invalid email field highlighted with red border - verified');
  } */
}