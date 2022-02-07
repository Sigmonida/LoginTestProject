const { Given } = require("@cucumber/cucumber");
const { When } = require("@cucumber/cucumber");
const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const loginPage = require("../pageobjects/login.page");
const fourBoxDashboard = require("../pageobjects/fourBoxDashboard");
const { login } = require("../pageobjects/login.page");
const overviewResultsPage = require("../pageobjects/overviewResultsPage");

Given("I am on the emprising login page", function () {
  loginPage.open(); // navigating to login page
});

When(
  "I login with username and password {string} {string} as {string}",
  function (user, pass, typeOfUser) {
    loginPage.login(user, pass);
  }
);

Then("I should land on 4-box dashboard", function () {
  return expect(fourBoxDashboard.addNewSurveyButton.waitForDisplayed());
});

Then(
  "I land on trouble logging in page, I should click on try again button",
  function () {
    return expect(loginPage.tryAgainButton.click());
  }
);

Then("I should get an {string}", function (errorType) {
  if (errorType === "EMAIL") {
    return expect(loginPage.emailErrorMessage.waitForDisplayed());
  }
  return expect(loginPage.errorMessage.waitForDisplayed());
});

Then("I should land on overview results page", function () {
  return expect(
    overviewResultsPage.overviewResultsHeader.waitForDisplayed({
      timeout: 60000,
    })
  );
});

Then(
  "Get an {string} error type with message: {string}",
  function (errorType, message) {
    if (errorType === "EMAIL") {
      return expect(loginPage.emailErrorMessage.getText()).to.have.string(
        message
      );
    }
    return expect(loginPage.errorMessage.getText()).to.have.string(message);
  }
);
