const TestOpsJasmineReporter = require('@katalon/testops-jasmine');

exports.config = {
  framework: "jasmine",
  specs: ["./dist/tests/*.js"],
  capabilities: {
    browserName: "chrome",
    args: ["--headless", "--disable-dev-shm-usage", "--no-sandbox"],
  },
  plugins: [
    {
      package: "@katalon/testops-protractor",
    },
  ],
  onPrepare: () => {
    const reporter = new TestOpsJasmineReporter();
    jasmine.getEnv().addReporter(reporter);
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 20000,
  },
};
