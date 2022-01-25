# LoginTestProject

## General overview
Cucumber in conjunction with chai and node-fetch provides a API testing framework, while the webdriverio provide UI testing framework.

The resources of the libraries used can be found here:
- Cucumber runner [cucumber-js] (https://cucumber.io/)
- Chai assertion library [chai] (https://www.chaijs.com)
- Node-fetch http request library [node-fetch] (https://www.npmjs.com/package/node-fetch)
- Cucumber html reporter [cucumber-html-reporter] (https://www.npmjs.com/package/cucumber-html-reporter)
- WebdriverIO [webdriverio] (https://webdriver.io/)

## Files & Folders

- `/commons/` - all globally used methods are here including services for communication with gmail and signalr.
- `/features/` - cucumber .feature files are located here and are used to make custom scenarios and are separated in api and ui folder (also ui and api can be mixed).
- `/pageobject/` - page objects of emprising and survey taker application
- `/stepDefinitions/` - files that represent tests and assertions which are later called in .feature files.
