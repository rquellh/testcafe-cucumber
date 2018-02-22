const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require('../support/testControllerHolder');
var { AfterAll, BeforeAll, setDefaultTimeout, Before, After, Status, } = require('cucumber');

var testcafe = null;
var TIMEOUT = 20000;
var n = 0;

function createTestFile() {
    fs.writeFileSync('test.js',
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test("test", testControllerHolder.capture)');
}

function runTest(iteration) {
    var runner = null;

    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function (tc) {
            testcafe = tc;
            runner = tc.createRunner();
            return runner
                .src('./test.js')
                .browsers('chrome')
                .screenshots('./reports/screenshots/')
                .run()
                .catch(function (error) {
                    console.log(error);
                });
        })
        .then(function (report) {
            console.log(report);
            testcafe.close()
        });
}


setDefaultTimeout(TIMEOUT);

BeforeAll(function () {

});

Before(function () {
    runTest(n);
    createTestFile();
    n += 2;
    return this.waitForTestController
});

After(function () {
    fs.unlinkSync('test.js');
    testControllerHolder.free();
    testcafe.close();
});

AfterAll(function () {

});