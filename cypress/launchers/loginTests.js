const cypress = require("cypress");

/*
 * This will run tests with Chrome and then Firefox
 * To run tests individually, use `npx cypress open` to open the test frontend window
 */
cypress
  .run({
    browser: "chrome",
    headed: false,
    spec: "cypress/e2e/tests/login/*",
    config: {
      video: false,
    },
  })
  .then((result) => {
    if (result.totalFailed > 0) {
      console.error("There was an error during tests.");
      process.exit(1);
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
