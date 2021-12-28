/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    constructor() {
        this.title = 'My Page'
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://dev-login.greatplacetowork.com/identity/Account/Login?ReturnUrl=%2Fidentity%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DGptwCMP%26redirect_uri%3Dhttps%253A%252F%252Fdev-cmp.greatplacetowork.com%252Flogin.html%26response_type%3Did_token%2520token%26scope%3Dopenid%2520GptwClientLoginScope%2520all_claims%2520profile%2520email%26state%3Dbe38925ee22b4fa58b5273db1269ba50%26nonce%3Dfff7e07ceb3a42eb943d79b81d26e680/${path}`);
    }
}

module.exports = Page;
