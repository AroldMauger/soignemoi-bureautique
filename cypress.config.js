import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:run', () => {
        const mochawesome = require('mochawesome');
        const mochawesomeMerge = require('mochawesome-merge');
        const mochawesomeReportGenerator = require('mochawesome-report-generator');

        mochawesomeMerge({
          files: ['./cypress/reports/*.json'],
        })
        .then((report) => mochawesomeReportGenerator.create(report, {
          reportDir: 'cypress/reports',
        }));
      });
    },
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
