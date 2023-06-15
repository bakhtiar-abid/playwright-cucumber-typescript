import { test, addToTestResults, getTestResults } from '../base/pomFixture'
import { expect, TestInfo, FullConfig, FullProject } from '@playwright/test'

const email = 'hello_world8@gmail.com'
const password = '123456'
const confirmPass = '123456'

type CustomTestResult = {
  testName: string
  status: 'passed' | 'failed'
}

test.describe('', () => {
  test('Register test_01', async ({
    page,
    baseURL,
    registerPage,
  }, testInfo) => {
    await page.goto(`${baseURL}register`)
    await registerPage.enterFirstName('Richard')
    await registerPage.enterLastName('William')
    await registerPage.enterEmail(email)
    await registerPage.enterPassword(password)
    await registerPage.enterConfirmPassword(confirmPass)
    await registerPage.enterRegister()

    const successMessage: any = await registerPage.successMessage()
    const result: CustomTestResult = {
      testName: testInfo.title,
      status: successMessage.includes('Your registration completed')
        ? 'passed'
        : 'failed',
    }

    addToTestResults(convertToTestInfo(result))
    expect(successMessage).toContain('Your registration completed')
  })

  test('Login test_01', async ({ page, baseURL, loginPage }, testInfo) => {
    await page.goto(`${baseURL}login`)
    await loginPage.enterEmail(email)
    await loginPage.enterPassword(password)
    await loginPage.enterLoginButton()

    // Your test logic goes here
  })

  test('Go to Electronic Page to search product', async ({
    page,
    baseURL,
    homePage,
  }, testInfo) => {
    await page.goto(`${baseURL}`)
    await homePage.enterElectronicPage()

    const electronicPageTitle: any = await homePage.getElectronicPageTitle()
    const result: CustomTestResult = {
      testName: testInfo.title,
      status: electronicPageTitle.includes('Training store. Electronics')
        ? 'passed'
        : 'failed',
    }

    addToTestResults(convertToTestInfo(result))
    expect(electronicPageTitle).toContain('Training store. Electronics')
  })

  test('Select Product From the list', async ({
    page,
    baseURL,
    electronicPage,
  }, testInfo) => {
    await page.goto(`${baseURL}electronics`)
    await electronicPage.enterCameraAndPhoto()
    await electronicPage.enterDslr()
    await electronicPage.enterAddToCartCamera()

    const addToCartMessage: any =
      await electronicPage.verifyAddToCartSuccessMessage()
    const result: CustomTestResult = {
      testName: testInfo.title,
      status: addToCartMessage.includes('The product has been added to your')
        ? 'passed'
        : 'failed',
    }

    addToTestResults(convertToTestInfo(result))
    expect(addToCartMessage).toContain('The product has been added to your')
  })
})

// Function to convert CustomTestResult to TestInfo
const convertToTestInfo = (result: CustomTestResult): TestInfo => {
  return {
    config: {} as FullConfig<{}, {}>,
    project: {} as FullProject<{}, {}>,
    attach: (() => {}) as any,
    title: result.testName,
    status: result.status === 'passed' ? 'passed' : 'failed',
    duration: 0, // Set the duration as per your requirement
    error: undefined, // Set the error if the test failed
    fail: () => {}, // A dummy implementation of the 'fail' method
    fixme: () => {}, // Dummy implementation of 'fixme' method
    outputPath: (() => '') as any, // Dummy implementation of 'outputPath' method
    setTimeout: () => {}, // A dummy implementation of the 'setTimeout' method
    // Add other required properties with appropriate values
    skip: () => {}, // Dummy implementation of 'skip' method
    slow: () => {}, // Dummy implementation of 'slow' method
    snapshotPath: (...pathSegments: string[]) => '', // Dummy implementation of 'snapshotPath' method
    annotations: [], // Default value for 'annotations' property
    attachments: [],
    column: '',
    errors: [],
    expectedStatus: '',
    column: 0, // Provide a default numerical value for column
    expectedStatus: 'passed' as const, // Provide a default expected status (e.g., 'passed')
  }
}

// Retrieve the test results
const results = getTestResults()
console.log(results)

// Run the test suite

// (async () => {
//   const results = await run({
//     timeout: 0, // Set the timeout as per your requirement
//   });

//   const testInfos = results.map((result) => {
//     const customResult: CustomTestResult = {
//       testName: result.testInfo.title,
//       status: result.status === "passed" ? "passed" : "failed",
//     };
//     addToTestResults(convertToTestInfo(customResult));
//     return result.testInfo;
//   });

//   console.log(testInfos);
// })();
