const {setWorldConstructor} = require('cucumber');
const testControllerHolder = require('./testControllerHolder');
const base64Img = require('base64-img');

function CustomWorld({attach, parameters}) {

    this.waitForTestController = testControllerHolder.get()
        .then(function(tc) {
            return testController = tc;
        });

    this.attach = attach;

    this.setBrowser = function() {
        if (parameters.browser === undefined) {
            return 'chrome';
        } else {
            return parameters.browser;
        }
    };

    this.addScreenshotToReport = function() {
        if (process.argv.includes('--format') || process.argv.includes('-f') || process.argv.includes('--format-options')) {
            testController.takeScreenshot()
                .then(function(screenshotPath) {
                    const imgInBase64 = base64Img.base64Sync(screenshotPath);
                    const imageConvertForCuc = imgInBase64.substring(imgInBase64.indexOf(',') + 1);
                    return attach(imageConvertForCuc, 'image/png');
                })
                .catch(function(error) {
                    console.warn('The screenshot was not attached to the report');
                });
        } else {
            return new Promise((resolve) => {
                resolve(null);
            });
        }
    };

    this.attachScreenshotToReport = function(pathToScreenshot) {
        const imgInBase64 = base64Img.base64Sync(pathToScreenshot);
        const imageConvertForCuc = imgInBase64.substring(imgInBase64.indexOf(',') + 1);
        return attach(imageConvertForCuc, 'image/png');
    };
}

setWorldConstructor(CustomWorld);
