const { Given } = require('@cucumber/cucumber');
const { When } = require('@cucumber/cucumber');
const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const loginPage = require('../pageobjects/login.page');
const fourBoxDashboard = require('../pageobjects/fourBoxDashboard');
const troubleLoggingIn = require('../pageobjects/troubleLoggingIn');
const { login } = require('../pageobjects/login.page');


Given('I am on the emprising login page', function () {
  loginPage.open();// navigating to login page
});

When('I login with username and password {string} {string} as {string}', function (user, pass, typeOfUser) {
  loginPage.login(user, pass);

});

Then('I should land on 4-box dashboard', function () {
  return expect(fourBoxDashboard.addNewSurveyButton.waitForDisplayed());
});

Then('I land on trouble logging in page, I should click on try again button', function () {
  return expect(troubleLoggingIn.tryAgainButton.click());
});

Then('I should get an error message', function () {
  return expect(loginPage.errorMessage.waitForDisplayed());
});

Then('The error message should say: {string}', function (message) {
  return expect(loginPage.errorMessage.getText()).to.have.string(message);
})

Then('I should get an email error message: {string}', function(message) {
  return expect(loginPage.emailErrorMessage.getText()).to.have.string(message);
})