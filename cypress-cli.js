const cypress = require('cypress')
const { CypressTestOpsReporter } = require('@katalon/testops-mocha');

  cypress.run({
  })
  .then((results) => {
    const config = {
      username: "lydoan@kms-technology.com",
      password: "Dtl#@1999",
      basePath: "http://localhost:8444/",
      projectId: 3,
      reportFolder: "./testops-result"
    }
    const reporter = new CypressTestOpsReporter(config);
    reporter.parseAndUploadTestResults(results);
  })
  .catch((err) => {
    console.error(err)
  })
