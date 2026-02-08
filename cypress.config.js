const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://green-flamingo-854862.hostingersite.com/',
    setupNodeEvents(on, config) {
      // Add JUnit reporter
      on('after:run', (results) => {
        // nothing extra needed here for simple setup
      });
    },
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: 'cypress/results/results-[hash].xml', // this is where reports will be saved
      toConsole: true
    },
  },
});
