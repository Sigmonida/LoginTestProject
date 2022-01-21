const { Given } = require('@cucumber/cucumber');
const { When } = require('@cucumber/cucumber');
const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const loginPage = require('../pageobjects/login.page');
const fourBoxDashboard = require('../pageobjects/fourBoxDashboard');
const troubleLoggingIn = require('../pageobjects/troubleLoggingIn');


Given('I am on the emprising login page', function () {
  loginPage.open();// navigating to login page
});

//When('I login with username and password {string} {string} as {string}', function (user, pass, typeOfUser) {
//   if (user === 'PREVIOULSY_CREATED_MANAGER') {
//     user = this.managerEmail;
//   }
//   switch (typeOfUser) {
//     case 'HR ADMIN':
//       loginPage.login(user, pass);
//       fourBoxdashboard.waitFor4BoxDashboardToLoad();
//       break;
//     case 'MANAGER':
//       loginPage.loginAsClient(user, pass);
//       resultsOverviewPage.waitForGptwStatement();
//       break;
//     case 'MANAGER_WITHOUT_SURVEYS':
//       loginPage.loginAsClient(user, pass);
//       break;
//   }
// });

When('I login with username and password {string} {string} as {string}', async function (user, pass, typeOfUser) {
      await loginPage.login(user, pass);
  
});

Then('I should land on 4-box dashboard', function () {
  
  return expect(fourBoxDashboard.addNewSurveyButton.waitForDisplayed());
});

Then('I land on trouble logging in page, I should click on try again button', function () {
  return expect(troubleLoggingIn.tryAgainButton.click());
});