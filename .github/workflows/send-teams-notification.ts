const axios = require('axios')
import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
const webhookUrl =
  'https://brainstationo365.webhook.office.com/webhookb2/8057d271-7315-4cf8-bbc9-da07ef13bb7b@a1e21495-2087-4312-a718-7f84ad109439/IncomingWebhook/9be71384f7774125b9194d8d7cf9cd99/fad27405-4c18-4692-8d4b-a92e0cb2c130'
  var test1;
  var test2;
  var test3;
  var test4;
async function sendTeamsNotification() {
  // const testResults = require('../../test-results.json') // Adjust the path to your actual test results file

  // customResults();
  // // const passedTests = testResults.passed;
  // // const failedTests = testResults.failed;

  // var result = testResults.suites?.reduce((res, cur, index) => {
  //   res += cur.specs.map((spec) => {
  //     var testPassed,
  //       testFailed = spec.tests.reduce(
  //         (acc, test) => {
  //           if (test.results.every((result) => result.status === 'passed')) {
  //             acc.testPassed += 1
  //           } else {
  //             acc.testFailed += 1
  //           }
  //           return acc
  //         },
  //         { testPassed: 0, testFailed: 0 }
  //       )
  //     var message = `Suites: ${index} \n title: ${spec.title} \n tests passed: ${testPassed}, tests failed: ${testFailed} \n\n`
  //     return message
  //   }, '')
  // })

  // var testSuites

  // var testTitle

  // var testAllSpec

  // var testStatus

  // var tests

  // var results

  // testSuites = testResults?.suites?.map((suit) => suit.suites)

  // testTitle = testSuites?.map((spec) => spec.specs)

  // testAllSpec = testTitle?.map((allSpec) => allSpec.title)

  // tests = testAllSpec?.tests?.map((test) => test)

  // results = tests?.results?.map((stat) => stat)

  // testStatus = results?.status

  // testResult = resultss.map((stat)=>stat.status);
  // const status = testSuite.map((expRes)=>expRes.expectedStatus);
  const message = `
    Test Results:
    - ${test1}
    
  `

  // console.log(result)
      // - TestTitle: ${testAllSpec}

  try {
    await axios.post(webhookUrl, {
      text: message,
    })
    console.log('Notification sent to Microsoft Teams successfully.')
  } catch (error) {
    console.error('Error sending notification to Microsoft Teams:', error)
  }
}




function customResults(){

  class MyReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite) {
      console.log(`Starting the run with ${suite.allTests().length} tests`);
      test1 = `Starting the run with ${suite.allTests().length} tests`;
    }
  
    onTestBegin(test: TestCase, result: TestResult) {
      console.log(`Starting test ${test.title}`);
    }
  
    onTestEnd(test: TestCase, result: TestResult) {
      console.log(`Finished test ${test.title}: ${result.status}`);
    }
  
    onEnd(result: FullResult) {
      console.log(`Finished the run: ${result.status}`);
    }
  }

  return MyReporter;
}

sendTeamsNotification()

// Failed Tests:
// ${testNames.join('\n')}

// - Skipped: ${testStatus === "skipped" ? testStatus : ""}

// - Passed: ${testAllSpec === "passed" ? testAllSpec : ""}
// - Failed: ${testAllSpec === "failed" ? testStatus : ""}
