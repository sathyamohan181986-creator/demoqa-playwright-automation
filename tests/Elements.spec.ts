import { expect, Page, test } from '@playwright/test'
import { readExcelData } from '@utils/excelreader';
import { LoginPage } from '../src/pages/LoginPage';
import { ElementsPage } from '@pages/ElementsPage';
import { url } from 'inspector';

const data: any = readExcelData();

const loginURL = data[0].pURL;
//const baseData = testdata[0];

test.describe('Access to DemoQA site', () => {
  test('TC1: Validate Text Box Elements with valid input', async ({ page }) => {
    const LOGIN_VALIDINPUT = new LoginPage(page);
    const LOGINURL_VALIDINPUT = data[0].pURL;
    await LOGIN_VALIDINPUT.navigatedemoQAhomePage(LOGINURL_VALIDINPUT);

    const TXTBOXELTS_VALIDINPUT = new ElementsPage(page);
    await TXTBOXELTS_VALIDINPUT.clickElementsCard(page);
    await TXTBOXELTS_VALIDINPUT.textBoxElts(
      data[0].pFullName,
      data[0].pEmailID,
      data[0].pCurrentAddress,
      data[0].pPermanentAddress
    );
    await TXTBOXELTS_VALIDINPUT.assertOutputvalues(
      data[0].pFullName,
      data[0].pEmailID,
      data[0].pCurrentAddress,
      data[0].pPermanentAddress
    );
  });  // ← TC1 ends

  test('TC2: Validate Text Boc Elements with invalid emailformat', async ({ page })  => {
    const LOGIN_INVALIDINPUT = new LoginPage(page);
    const LOGINURL_INVALIDINPUT = data[1].pURL;
    await LOGIN_INVALIDINPUT.navigatedemoQAhomePage(LOGINURL_INVALIDINPUT);

    const TXTBOXELTS_INVALIDINPUT = new ElementsPage(page);
    await TXTBOXELTS_INVALIDINPUT.clickElementsCard(page);
    await TXTBOXELTS_INVALIDINPUT.textBoxElts(
      data[1].pFullName,
      data[1].pEmailID,
      data[1].pCurrentAddress,
      data[1].pPermanentAddress
    );
   // Assert red border on email field
    await TXTBOXELTS_INVALIDINPUT.assertInvalidEmail();
  }); 
  })
