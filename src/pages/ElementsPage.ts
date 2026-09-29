import { expect, Page } from '@playwright/test';
import { demohomepage, elementslocator, checkboxlocator, radiobtnlocator, webtablelocator, buttonslocator } from '../locators/DemoQA';
import { fillElementsPage, webTablesData } from '../test_data/testdata';
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
   // await this.page.pause();
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

  async checkBoxElts() {
    const elementscard = demohomepage(this.page);
    await elementscard.elements.waitFor({ state: 'visible', timeout: 15000 });
    await elementscard.elements.click();
    const checkboxloc = checkboxlocator(this.page);
    await checkboxloc.checkbox.click();
    await checkboxloc.treeSwitcher.click();
    await checkboxloc.closedSwitcher.click();
    await checkboxloc.desktopCheckbox.check();
    await checkboxloc.documentsCheckbox.check();
    //await checkboxloc.angularCheckbox.check();
    await this.page.screenshot({ path: 'screenshots/checkboxElements.png', fullPage: true });
  }

  async radioButtonElts() {
    const elementscard = demohomepage(this.page);
    await elementscard.elements.waitFor({ state: 'visible', timeout: 15000 });
    await elementscard.elements.click();
    const radiobtnloc = radiobtnlocator(this.page);
    await radiobtnloc.radioButton.click();
    await radiobtnloc.yesRadio.check();
    await this.page.screenshot({ path: 'screenshots/radioButtonElements.png', fullPage: true });
    await expect(this.page.locator('p.mt-3')).toHaveText('You have selected Yes');
    console.log('✅ Radio Button Assertion  : You have selected Yes - PASS');
    //await radiobtnloc.impressive.check();
    //await this.page.screenshot({ path: 'screenshots/radioButtonElements_impressive.png', fullPage: true });
    //await expect(radiobtnloc.message).toHaveText('You have selected Impressive');
  }

  async webTablesElts() {
    const elementscard = demohomepage(this.page);
    await elementscard.elements.waitFor({ state: 'visible', timeout: 15000 });
    await elementscard.elements.click();
    const webtableloc = webtablelocator(this.page);
    await webtableloc.webTables.click();
    await webtableloc.addButton.click();
    await webtableloc.firstName.fill(webTablesData.webTablesElements.firstName);
    await webtableloc.lastName.fill(webTablesData.webTablesElements.lastName);
    await webtableloc.userEmail.fill(webTablesData.webTablesElements.emailId);
    await webtableloc.age.fill(webTablesData.webTablesElements.age.toString());
    await webtableloc.salary.fill(webTablesData.webTablesElements.salary.toString());
    await webtableloc.department.fill(webTablesData.webTablesElements.department);
    await webtableloc.submitbtn.click();
    await this.page.waitForTimeout(6000);
    await this.page.screenshot({ path: 'screenshots/webTablesElements.png', fullPage: true });
  }

  async buttonClick() {
    const elementscard = demohomepage(this.page);
    await elementscard.elements.waitFor({ state: 'visible', timeout: 15000 });
    await elementscard.elements.click();
    const buttonloc = buttonslocator(this.page);
    await buttonloc.buttons.click();
    await buttonloc.doubleClickBtn.dblclick();
    await expect(buttonloc.doubleClickMsg).toContainText('You have done a double click');
    await buttonloc.rightClickBtn.click({ button: 'right' });
    await expect(buttonloc.rightClickMsg).toContainText('You have done a right click');
    await buttonloc.clickMeBtn.click();
    await expect(buttonloc.clickMeMsg).toContainText('You have done a dynamic click');
    await this.page.screenshot({ path: 'screenshots/buttonElements.png', fullPage: true });
  }
 
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