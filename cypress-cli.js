const cypress = require('cypress')
const { CypressTestOpsReporter } = require('@katalon/testops-mocha');

  cypress.run({
  })
  .then((results) => {
    const reporter = new CypressTestOpsReporter();
    reporter.parseAndUploadTestResults(results);
  })
  .catch((err) => {
    console.error(err)
  })
