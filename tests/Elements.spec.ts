import { expect, Page, test } from '@playwright/test'
import { readExcelData } from '@utils/excelreader';
import { ElementsPage } from '@pages/ElementsPage';
import { fillElementsPage, webTablesData } from '../src/test_data/testdata';
import { url } from 'inspector';
import { demohomepage } from 'src/locators/DemoQA';



test.describe('Access to DemoQA site', ()=> {
  test('TC1: Validate Text Box Elements with valid input', async ({ page }) => {
    const elementscard = new ElementsPage(page);
    const demoQAURLtxt = fillElementsPage.textBoxElements.demoQAurl;
    await elementscard.clickElementsCard(demoQAURLtxt);
    await elementscard.textBoxElts(fillElementsPage.textBoxElements.fullName, fillElementsPage.textBoxElements.emailId, fillElementsPage.textBoxElements.currAdd, fillElementsPage.textBoxElements.permAdd);
    await elementscard.assertOutputvalues(fillElementsPage.textBoxElements.fullName, fillElementsPage.textBoxElements.emailId, fillElementsPage.textBoxElements.currAdd, fillElementsPage.textBoxElements.permAdd);
  })
  test('TC2: Validate Check Box Elements', async ({ page }) => {
    const checkboxelts = new ElementsPage(page);
    const demoQAURLchk = fillElementsPage.textBoxElements.demoQAurl;
    await checkboxelts.clickElementsCard(demoQAURLchk);
    await checkboxelts.checkBoxElts();
  })
  test('TC3: Validate Radio Button Elements', async ({ page }) => {
    const radiobtnelts = new ElementsPage(page);
    const demoQAURLradio = fillElementsPage.textBoxElements.demoQAurl;
    await radiobtnelts.clickElementsCard(demoQAURLradio);
    await radiobtnelts.radioButtonElts();
  })
  test('TC4: Validate Web Tables Elements', async ({ page }) => {
    const webtableelts = new ElementsPage(page);
    const demoQAURLwebtable = webTablesData.webTablesElements.demoQAurl;
    await webtableelts.clickElementsCard(demoQAURLwebtable);
    await webtableelts.webTablesElts();
  })
  test('TC5: Validate Button Click Elements', async ({ page }) => {
    const buttonclickelts = new ElementsPage(page);
    const demoQAURLbuttonclick = fillElementsPage.textBoxElements.demoQAurl;
    await buttonclickelts.clickElementsCard(demoQAURLbuttonclick);
    await buttonclickelts.buttonClick();
  })

});