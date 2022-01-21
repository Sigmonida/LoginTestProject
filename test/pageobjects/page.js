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
        return browser.url(`https://dev-cmp.greatplacetowork.com/${path}`);
    }
}

module.exports = Page;
