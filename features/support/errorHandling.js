const testcafe = require('testcafe');
const hooks = require('../support/hooks');

exports.addErrorToController = function() {
    testController.executionChain
        .catch(function(result) {
            errAdapter = new testcafe.embeddingUtils.TestRunErrorFormattableAdapter(result, {
                screenshotPath: null,
                testRunPhase: testController.testRun.phase,
                userAgent: testController.testRun.browserConnection.browserInfo.userAgent,
            });
            return testController.testRun.errs.push(errAdapter);
        });
};

exports.ifErrorTakeScreenshot = function(resolvedTestController) {
    let tcScreenshotCapturer = testController.testRun.browserManipulationQueue.screenshotCapturer;
    let screenshotPath = tcScreenshotCapturer.baseDirName + '\\test-' + tcScreenshotCapturer.testIndex + '\\' + tcScreenshotCapturer.userAgentName + '\\errors\\' + tcScreenshotCapturer.errorScreenshotIndex + '.png';

    if (hooks.getIsTestCafeError() === true && testController.testRun.opts.takeScreenshotsOnFails === true) {
        if (process.argv.includes('--format') || process.argv.includes('-f') || process.argv.includes('--format-options')) {
            return resolvedTestController.takeScreenshot(screenshotPath).then(function(path) {
                // TODO: This is still not attaching the screenshot to the report

                return hooks.getAttachScreenshotToReport(screenshotPath);
            });
        } else {
            return resolvedTestController.takeScreenshot(screenshotPath);
        }
    }
};
