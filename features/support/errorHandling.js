const testcafe = require('testcafe');
const hooks = require('../support/hooks');

exports.addErrorToController = function() {
    testController.executionChain
        .catch(function(result) {
            const errAdapter = new testcafe.embeddingUtils.TestRunErrorFormattableAdapter(result, {
                testRunPhase: testController.testRun.phase,
                userAgent: testController.testRun.browserConnection.browserInfo.userAgent,
            });
            return testController.testRun.errs.push(errAdapter);
        });
};

exports.ifErrorTakeScreenshot = function(resolvedTestController) {

    if (hooks.getIsTestCafeError() === true && testController.testRun.opts.takeScreenshotsOnFails === true) {
        if (process.argv.includes('--format') || process.argv.includes('-f') || process.argv.includes('--format-options')) {
            return resolvedTestController.takeScreenshot().then(function(path) {
                // TODO: This is still not attaching the screenshot to the report

                return hooks.getAttachScreenshotToReport();
            });
        } else {
            return resolvedTestController.takeScreenshot();
        }
    }
};
