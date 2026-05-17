import { expect, Page } from '@playwright/test';
import { demohomepage, elementslocator } from '../locators/DemoQA';
import { readExcelData } from '@utils/excelreader';


export class ElementsPage {constructor(private page: Page) {}

//Navigate to DemoQA URL
  async navigatedemoQAhomePage(url: string) {
    await this.page.goto(url);
  }

//Validate the Elements page
  async clickElementsCard(fields: any) {
    const elementscard = demohomepage(this.page);
    await elementscard.elements.waitFor({ state: 'visible', timeout: 15000 });
    await elementscard.elements.click();
    await elementscard.textBox.click();
  }

//Fill the value in Text Box Elements page
  async textBoxElts(fullName: string, emailId: string, currAdd: string, permAdd: string) {
    const elementsloc = elementslocator(this.page);
    await elementsloc.fullName.fill(fullName);
    await elementsloc.email.fill(emailId);
    await elementsloc.curradd.fill(currAdd);
    await elementsloc.permadd.fill(permAdd);
    await elementsloc.submitbtn.click();
    await (expect )
  }

//Assert the values of the Text Box Elements page
  async assertOutputvalues(fullName: string, emailId: string, currAdd: string, permAdd: string): Promise<void> {
    const elementsloc = elementslocator(this.page);
    const OUTPUT = await expect(elementsloc.output).toBeVisible();
    await expect(elementsloc.Name_OUTPUT).toContainText(fullName);
    await expect(elementsloc.email_OUTPUT).toContainText(emailId);
    await expect(elementsloc.curradd_OUTPUT).toContainText(currAdd);
    await expect(elementsloc.permadd_OUTPUT).toContainText(permAdd);

  }

// Assert invalid email - field highlighted with red border
  async assertInvalidEmail(): Promise<void> {
    const elementsloc = elementslocator(this.page);
  
// Assert the red border color on email field
    await expect(elementsloc.email).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    console.log('✅ Invalid Email Assertion  : Email field highlighted with red border - PASS');
  
// OR assert by checking the field has 'error' class (inspect element to confirm)
    await expect(elementsloc.email).toHaveClass(/error/);
  
    console.log('✅ Invalid email field highlighted with red border - verified');
  }
}