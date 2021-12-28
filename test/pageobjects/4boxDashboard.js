const Page = require('./page');

class fourBoxDashboard extends Page {

    get onboardSlideButton() {return $('.ob-slider__start-button span'); }
    get addNewSurveyButton() { return $('.pd-create-survey-btn'); }

    waitFor4BoxDashboardToLoad() {
        if (!this.addNewSurveyButton.isDisplayed()) {
          this.addNewSurveyButton.waitForDisplayed();
        }}
}

module.exports = new fourBoxdashboard();