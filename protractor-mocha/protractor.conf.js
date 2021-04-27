
exports.config = {
    framework: "mocha",
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
    mochaOpts: {
        timeout: "20s",
        reporter: "@katalon/testops-mocha",
    },
};
