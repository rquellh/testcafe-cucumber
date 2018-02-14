var { Given, When, Then } = require('cucumber');
var Selector = require('testcafe').Selector;

Given('I am open Google\'s search page', function () {
    return this.waitForTestController()
        .then(function (tc) {
            testController = tc;

            return testController.navigateTo('https://google.com');

        })
});

When('I am typing my search request {string} on Google', function (text) {
    var input = Selector('#lst-ib').with({ boundTestRun: testController });

    return testController.typeText(input, text);
});

Then('I am pressing {string} key on Google', async (text) => {
    await testController.pressKey(text);
});

Then('I should see that the first Google\'s result is {string}', function (text) {
    var firstLink = Selector('#rso').find('a').with({ boundTestRun: testController });

    return testController.expect(firstLink.innerText).contains(text);
});