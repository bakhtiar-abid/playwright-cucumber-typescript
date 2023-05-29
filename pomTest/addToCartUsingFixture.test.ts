import { expect, test, testResults } from "../base/pomFixture";

const email = "user_me7d88@gmail.com";
const password = "123456";
const confirmPass = "123456";

test.describe("", async () => {
  test("Register test_01", async ({ page, baseURL, registerPage }, testInfo) => {
    await page.goto(`${baseURL}register`);
    await registerPage.enterFirstName("Richard");
    await registerPage.enterLastName("William");
    await registerPage.enterEmail(email);
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(confirmPass);
    await registerPage.enterRegister();

    const successMessage: any = await registerPage.successMessage();
    const result = {
      testName: testInfo.title,
      status: successMessage.includes("Your registration completed") ? "pass" : "fail",
    };

    testResults.push(result);
    expect(successMessage).toContain("Your registration completed");
  });

  test("Login test_01", async ({ page, baseURL, loginPage }, testInfo) => {
    await page.goto(`${baseURL}login`);
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.enterLoginButton();

    // const loginStatus: any = await loginPage.getLoginStatus();
    // const result = {
    //   testName: testInfo.title,
    //   status: loginStatus.includes("Login successful") ? "pass" : "fail",
    // };

    // testResults.push(result);
    // expect(loginStatus).toContain("Login successful");
  });

  test("Go to Electronic Page to search product", async ({ page, baseURL, homePage }, testInfo) => {
    await page.goto(`${baseURL}`);
    await homePage.enterElectronicPage();

    const electronicPageTitle: any = await homePage.getElectronicPageTitle();
    const result = {
      testName: testInfo.title,
      status: electronicPageTitle.includes("Electronic Page") ? "pass" : "fail",
    };

    testResults.push(result);
    expect(electronicPageTitle).toContain("Electronic Page");
  });

  test("Select Product From the list", async ({ page, baseURL, electronicPage }, testInfo) => {
    await page.goto(`${baseURL}electronics`);
    await electronicPage.enterCameraAndPhoto();
    await electronicPage.enterDslr();
    await electronicPage.enterAddToCartCamera();

    const addToCartMessage: any = await electronicPage.verifyAddToCartSuccessMessage();
    const result = {
      testName: testInfo.title,
      status: addToCartMessage.includes("The product has been added to your") ? "pass" : "fail",
    };

    testResults.push(result);
    expect(addToCartMessage).toContain("The product has been added to your");
  });

});