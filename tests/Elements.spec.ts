import { expect, Page, test } from '@playwright/test'
import { readExcelData } from '@utils/excelreader';
import { ElementsPage } from '@pages/ElementsPage';
import { fillElementsPage } from '../src/test_data/testdata';
import { url } from 'inspector';
import { demohomepage } from 'src/locators/DemoQA';



test.describe('Access to DemoQA site', ()=> {
  test('TC1: Validate Text Box Elements with valid input', async ({ page }) => {
    const elementscard = new ElementsPage(page);
    const demoQAURL = fillElementsPage.textBoxElements.demoQAurl;
    await elementscard.clickElementsCard(demoQAURL);
    await elementscard.textBoxElts(fillElementsPage.textBoxElements.fullName, fillElementsPage.textBoxElements.emailId, fillElementsPage.textBoxElements.currAdd, fillElementsPage.textBoxElements.permAdd);
    await elementscard.assertOutputvalues(fillElementsPage.textBoxElements.fullName, fillElementsPage.textBoxElements.emailId, fillElementsPage.textBoxElements.currAdd, fillElementsPage.textBoxElements.permAdd);
  })});