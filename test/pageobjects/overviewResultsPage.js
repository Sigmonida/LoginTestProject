const Page = require('./page');

class overviewResultsPage extends Page {

  get overviewResultsHeader() { return $('.justifize__box.text-header-holder'); }

}
module.exports = new overviewResultsPage();