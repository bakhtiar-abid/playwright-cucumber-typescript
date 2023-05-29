import { test as baseTest, TestInfo } from "@playwright/test";
import RegisterPage from "./../pages/registerPage";
import HomePage from "../pages/homePage";
import ElectronicPage from "../pages/electronicsPage";
import LoginPage from "../pages/loginPage";
const fs = require("fs");



type Pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  homePage: HomePage;
  electronicPage: ElectronicPage;
};



// Create a separate array to store the test results
const testResults: TestInfo[] = [];



export const getTestResults = (): TestInfo[] => testResults;
console.log("testResults", getTestResults);
// Extend the base test to include the `addToTestResults` method
const testPages = baseTest.extend<Pages>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  electronicPage: async ({ page }, use) => {
    await use(new ElectronicPage(page));
  },
});


export const test = testPages;
export const expect = testPages.expect;
export const addToTestResults = (result: TestInfo) => {
  testResults.push(result);
};


// function saveResultsToFile() {
//   const json = JSON.stringify(testResults, null, 2);
//   fs.writeFileSync("./test-results.json", json);
//   console.log("Test results saved to test-results.json");
// }
// saveResultsToFile()

