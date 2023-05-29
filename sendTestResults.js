const fs = require("fs");

const testResults = require("./test-results.json");

function generateMessage() {
  let message = "Test Results:\n\n";
  for (const result of testResults) {
    message += `${result.testName}: ${result.status}\n`;
  }
  return message;
}

function saveResultsToFile() {
  const json = JSON.stringify(testResults, null, 2);
  fs.writeFileSync("test-results.json", json);
  console.log("Test results saved to test-results.json");
}

function sendNotification() {
    const message = generateMessage();
    const webhookUrl = "https://brainstationo365.webhook.office.com/webhookb2/8057d271-7315-4cf8-bbc9-da07ef13bb7b@a1e21495-2087-4312-a718-7f84ad109439/IncomingWebhook/9be71384f7774125b9194d8d7cf9cd99/fad27405-4c18-4692-8d4b-a92e0cb2c130";
  
    axios
      .post(webhookUrl, {
        text: message,
      })
      .then(() => {
        console.log("Notification sent successfully");
      })
      .catch((error) => {
        console.error("Error sending notification:", error);
      });
}

saveResultsToFile();
sendNotification();