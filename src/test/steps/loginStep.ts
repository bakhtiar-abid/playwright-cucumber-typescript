
  
import { Given, When, Then } from "@cucumber/cucumber"; 
import { Browser, Page,  chromium,  expect } from '@playwright/test';






let browser: Browser;
let page: Page;

let pageTitle: String;

 async function waitForTimeoutt(duration: any) {
  return await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
// async function openBrowser(pageLink: any) {
   
// }


  //        Given('user navigates to the application home page', async function () {
  //         browser = await chromium.launch({headless: false});
  
  //  // Setup context however you like.
  //  const context = await browser.newContext({ /* pass any options */ ignoreHTTPSErrors: true });
  //  page = await context.newPage();
  //  await page.goto("https://localhost:44369/");
        
          
  //        });



// 2) Scenario: Login with valid Username and invalid password
       


         Given('user go to login page', async function () {
          browser = await chromium.launch({headless: true});
  
          // Setup context however you like.
          const context = await browser.newContext({ /* pass any options */ ignoreHTTPSErrors: true });
          page = await context.newPage();
          await page.goto("https://training.nop-station.com/login");
          
         });
       

         When('user enters username {string}', async function (username) {
          // await page.waitForTimeout(10000);
           await page.locator("//input[@id='Email']").type(username);
         });

  
       

         When('user enters password {string}', async function (password) {
            await page.locator("//input[@id='Password']").type(password);
         });

 
       

         When('user clicks on Login button', async function () {
           await page.locator("//button[normalize-space()='Log in']").click();
         });

  
       

         Then('user should see error message {string}', async function (errorMessage) {
          const element = await page.locator("//div[@class='message-error validation-summary-errors']");
          const textContext = await element.textContent();
          textContext?.replace("\n", "");
         await expect(textContext).toContain(errorMessage);
         
         });

        
        Then('user should see wrong email error {string}', async function (errorMessage) {
          await page.waitForSelector("#Email-error", {timeout: 5000});
          const element = await page.locator("#Email-error");
          const textContext = await element.textContent();
          textContext?.replace("\n", "");
         await expect(textContext).toContain(errorMessage);
      
        });

        Then('user should see error message if no customer found {string}', async function (noCustomer) {
          const element = await page.locator(".message-error.validation-summary-errors");
          const textContext = await element.textContent();
          textContext?.replace("\n", "");
         await expect(textContext).toContain(noCustomer);
         
        });

        Then('user should see error message as {string}', async function (errorMessage) {
          await page.waitForSelector("#Email-error", {timeout: 5000});
          const element = await page.locator("#Email-error");
          const textContext = await element.textContent();
          textContext?.replace("\n", "");
         await expect(textContext).toContain(errorMessage);
        });

        When('user click on my account page', async function () {
        const locatePage = await page.locator("//a[@class='ico-account']");
        locatePage.click();
        page.close();
        });

        Then('page title should be {string}', async function (pageTitle) {
         const getTitle =  await page.title()
         await expect(getTitle).toContain(pageTitle);
        
        });

        


