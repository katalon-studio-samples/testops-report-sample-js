const cypress = require('cypress')
const  MochaTesOpsReporter = require('@katalon/testops-mocha')

cypress.run({

})
  .then((results) => {
    console.log('results: ', results);
    // let reporter = new MochaTesOpsReporter();
  })
  .catch((err) => {
    console.error(err)
  })
