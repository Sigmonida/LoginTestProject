const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginButton() { return $('.new-login__login-button') }
    get inputUsername() { return $('#Email') }
    get inputPassword() { return $('#Password') }
    get btnSubmit() { return $('button[type="submit"]') }
    get errorMessage() { return $('.validation-summary-errors li') }
    get emailErrorMessage() { return $('#Email-error') }
    get tryAgainButton() { return $('.trouble-logging-in .btn')}

 login(username, password) {
        this.loginButton.waitForClickable({ timeout: 60000 });
        this.loginButton.click();
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
