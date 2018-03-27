const fs = require('fs');
const createTestCafe = require('testcafe');
const testcafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
const { AfterAll, BeforeAll, setDefaultTimeout, Before, After, Status } = require('cucumber');

var cafeRunner = null;
var TIMEOUT = 20000;
var n = 0;

function createTestFile() {
    fs.writeFileSync('test.js',
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test("test", testControllerHolder.capture)');
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
    if (testCase.result.status === Status.FAILED) {
        testController.executionChain
            .catch(async function (result) {
                errAdapter = new testcafe.embeddingUtils.TestRunErrorFormattableAdapter(result, {
                    screenshotPath: null,
                    testRunPhase: testController.testRun.phase,
                    userAgent: testController.testRun.browserConnection.browserInfo.userAgent
                });
                await testController.testRun.errs.push(errAdapter)
            })
    };
});

AfterAll(function(){
    var intervalId = null;

    function waitForTestCafe () {
        intervalId = setInterval(checkLastResponse, 500)
    }

    function checkLastResponse(){
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            process.exit();
            clearInterval(intervalId);
        }
    }

    waitForTestCafe();
});