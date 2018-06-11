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
            var baseDirName = testController.testRun.browserManipulationQueue.screenshotCapturer.baseDirName;
            var testIndex = testController.testRun.browserManipulationQueue.screenshotCapturer.testIndex;
            var screenshotIndex = testController.testRun.browserManipulationQueue.screenshotCapturer.screenshotIndex;
            var baseScreenshotPath = testController.testRun.browserManipulationQueue.screenshotCapturer.baseScreenshotsPath;
            var cafeScreenshotPath = '\\' + baseDirName + '\\test-' + testIndex + '\\' + screenshotIndex + '.png';
            var fullScreenshotPath = '.\\' + formatBase(baseScreenshotPath) + cafeScreenshotPath;

            function formatBase(path) {
                removeLastSlash = path.slice(0, -1);
                return forwardSlash = removeLastSlash.replace('/', '\\');
            }

            testController.takeScreenshot(cafeScreenshotPath)
                .then(function() {
                    var imgInBase64 = base64Img.base64Sync(fullScreenshotPath);
                    var imageConvertForCuc = imgInBase64.substring(imgInBase64.indexOf(',') + 1);
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
        var imgInBase64 = base64Img.base64Sync(pathToScreenshot);
        var imageConvertForCuc = imgInBase64.substring(imgInBase64.indexOf(',') + 1);
        return attach(imageConvertForCuc, 'image/png');
    };
}

setWorldConstructor(CustomWorld);
