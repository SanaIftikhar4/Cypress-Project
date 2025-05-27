const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,                           // record video
  trashAssetsBeforeRuns: true,          // clean up before each run
  videoUploadOnPasses: false,           // ✅ only keep video if test fails

  e2e: {

    baseUrl: 'https://qa.koel.app',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});