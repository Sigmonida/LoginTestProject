const { Given } = require('@cucumber/cucumber');
const { When } = require('@cucumber/cucumber');
const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const loginPage = require('../pageobjects/login.page');


Given('I am on the emprising login page', function () {
  loginPage.open();// navigating to login page
});

When('I login with username and password {string} {string} as {string}', function (user, pass, typeOfUser) {
  if (user === 'PREVIOULSY_CREATED_MANAGER') {
    user = this.managerEmail;
  }
  switch (typeOfUser) {
    case 'HR ADMIN':
      loginPage.login(user, pass);
      landingPage;
      break;
    case 'MANAGER':
      loginPage.loginAsClient(user, pass);
      resultsOverviewPage.waitForGptwStatement();
      break;
    case 'MANAGER_WITHOUT_SURVEYS':
      loginPage.loginAsClient(user, pass);
      break;
  }
});

Then('I should land on 4-box dashboard', function () {
  return expect(fourBoxDashboard.addNewSurveyButton.waitForDisplayed());
});