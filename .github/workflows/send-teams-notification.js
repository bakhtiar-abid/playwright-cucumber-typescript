const axios = require('axios');

const webhookUrl = "https://brainstationo365.webhook.office.com/webhookb2/8057d271-7315-4cf8-bbc9-da07ef13bb7b@a1e21495-2087-4312-a718-7f84ad109439/IncomingWebhook/9be71384f7774125b9194d8d7cf9cd99/fad27405-4c18-4692-8d4b-a92e0cb2c130";

async function sendTeamsNotification() {
  const testResults = require('./test-results.json'); // Adjust the path to your actual test results file

  const passedTests = testResults.passed;
  const failedTests = testResults.failed;

//   const testNames = testResults.tests.map((test) => test.name);

  const message = `
    Test Results:
    - Passed: ${passedTests}
    - Failed: ${failedTests}

    Failed Tests:
    ${testNames.join('\n')}
  `;

  try {
    await axios.post(webhookUrl, {
      text: message,
    });
    console.log('Notification sent to Microsoft Teams successfully.');
  } catch (error) {
    console.error('Error sending notification to Microsoft Teams:', error);
  }
}

sendTeamsNotification();