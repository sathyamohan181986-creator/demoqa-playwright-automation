import {expect, Locator, Page, test} from '@playwright/test';
import { console } from 'node:inspector';


//DemoQA Home page locators
export const logindemoQA = (page: Page): Record<string, Locator> => ({
    firstName:      page.getByPlaceholder('First Name', { exact: true }),
    lastName:       page.getByPlaceholder('Last Name', { exact: true }),
    userName:       page.getByPlaceholder('UserName', { exact: true }),
    password:       page.getByPlaceholder('Password', { exact: true }),
    registerbtn:    page.getByRole('button', { name: 'Register' }),
    loginbtn:       page.getByRole('button', { name: 'Login' }),
})

export const bookStore = (page: Page): Record<string, Locator> => ({
    bookStoreapp:    page.getByText('Book Store Application'),
    searchBox:       page.getByPlaceholder('Type to search'),
    bookName1:       page.getByRole('link', { name: 'Git Pocket Guide' }),
    bookName2:       page.getByRole('link', { name: 'Learning JavaScript Design Patterns' }),
    bookName3:       page.getByRole('link', { name: 'Designing Evolvable Web APIs with ASP.NET' }),
    bookName4:       page.getByRole('link', { name: 'Speaking JavaScript' }),
    bookName5:       page.getByRole('link', { name: 'You Don’t Know JS' }),
    bookName6:       page.getByRole('link', { name: 'Programming JavaScript Applications' }),
    bookName7:       page.getByRole('link', { name: 'Eloquent JavaScript, Second Edition' }),
    bookName8:       page.getByRole('link', { name: 'Understanding ECMAScript 6' }),
    clicksearch:     page.getByRole('button').filter({ hasText: /^$/ }),
    addToCollection: page.getByRole('button', { name: 'Add To Your Collection' }),
    backToBookStore: page.getByRole('button', { name: 'Back To Book Store' }),
    profileBook:     page.getByRole('link', { name: 'Profile' })
})
export const demohomepage = (page: Page): Record<string, Locator> => ({
    header:         page.getByRole('img', { name: 'Toolsqa' }),
    elements:       page.getByText('Elements'),
    textBox:        page.getByText('Text Box'),
    forms:          page.getByText('Forms'),
    alframwin:      page.getByText('Alerts, Frame & Windows'),
    widgets:        page.getByText('Widgets'),
    interactions:   page.getByText('Interactions'),
    bookstoreapp:   page.getByText('Book Store Application')
})

export const elementslocator = (page: Page): Record<string, Locator> => ({
    
    //textBoxHeader:  page.getBy
    fullName:       page.getByPlaceholder('Full Name', { exact: true }),
    email:          page.getByPlaceholder('name@example.com', { exact: true }),
    curradd:        page.getByPlaceholder('Current Address', { exact: true }),
    permadd:        page.locator('//*[@id="permanentAddress"]'),
    submitbtn:      page.getByText('Submit'),
    output:         page.locator('//*[@id="output"]'),
    Name_OUTPUT:    page.locator('//p[@id="name"]'),
    email_OUTPUT:   page.locator('//p[@id="email"]'),
    curradd_OUTPUT: page.locator('//p[@id="currentAddress"]'),
    permadd_OUTPUT: page.locator('//p[@id="permanentAddress"]')
})

//