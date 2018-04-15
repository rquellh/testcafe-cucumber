const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
const { AfterAll, BeforeAll, setDefaultTimeout, Before, After, Status } = require('cucumber');
const errorHandling = require('../support/errorHandling')

var isTestCafeError = false;
var attachScreenshotToReport = null;
var cafeRunner = null;
var TIMEOUT = 20000;
var n = 0;

function createTestFile() {
    fs.writeFileSync('test.js',
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)\n' +
        '.after(async t => {await errorHandling.ifErrorTakeScreenshot(t)})');
}

function runTest(iteration, browser) {
    var runner = null;

    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function (tc) {
            cafeRunner = tc;
            runner = tc.createRunner();
            return runner
                .src('./test.js')
                .screenshots('reports/screenshots/', true)
                .browsers(browser)
                .run()
                .catch(function (error) {
                    console.log(error);
                });
        })
        .then(function (report) {
        });
}


setDefaultTimeout(TIMEOUT);

Before(function () {
    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController.then(function (testController) {
        return testController.maximizeWindow();
    })
});

After(function () {
    fs.unlinkSync('test.js');
    testControllerHolder.free();
});

After(function (testCase) {
    var world = this;
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true;
        attachScreenshotToReport = world.attachScreenshotToReport;
        errorHandling.addErrorToController();
    }
});

AfterAll(function () {
    var intervalId = null;

    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500)
    }

    function checkLastResponse() {
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            cafeRunner.close();
            process.exit();
            clearInterval(intervalId);
        }
    }

    waitForTestCafe();
})

var getIsTestCafeError = function() {
    return isTestCafeError;
}

var getAttachScreenshotToReport = function(){
    return attachScreenshotToReport;
}

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;