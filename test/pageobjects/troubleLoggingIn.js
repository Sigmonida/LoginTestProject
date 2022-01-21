const Page = require('./page');

class troubleLoggingIn extends Page {

    get tryAgainButton() { return $('.trouble-logging-in .btn'); }

}    
module.exports = new troubleLoggingIn();