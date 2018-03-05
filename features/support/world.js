var { setWorldConstructor } = require('cucumber');
const testControllerHolder = require('./testControllerHolder');
var base64Img = require('base64-img');

function CustomWorld({ attach, parameters }) {
    this.waitForTestController = testControllerHolder.get()    
    .then(function (tc) {
        return testController = tc;
    })   

    this.attach = attach;

    this.setBrowser = function() {
        if (parameters.browser === undefined) {
            return "chrome";
        } else {
            return parameters.browser;
        }
    }

    this.addScreenshotToReport = function () {
        if (process.argv.includes("--format") || process.argv.includes("-f") || process.argv.includes("--format-options")){
            return testController.takeScreenshot()
            .then(function (buffer) {
                var imgInBase64 = base64Img.base64Sync(buffer)
                var imageConvertForCuc = imgInBase64.substring(imgInBase64.indexOf(",") + 1)
                return attach(imageConvertForCuc, 'image/png');
            })
        }
    }
}

setWorldConstructor(CustomWorld)