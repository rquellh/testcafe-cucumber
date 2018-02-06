var { Given, When, Then } = require('cucumber');
var Selector = require('testcafe').Selector;

Given(/^I am open Google\'s search page$/, function () {
    return this.waitForTestController()
        .then(function (tc) {
            t = tc;

            return t.navigateTo('https://google.com');

        })
});

When(/^I am typing my search request (.*) on Google$/, function (text) {
    var input = Selector('#lst-ib').with({ boundTestRun: t });

    return t.typeText(input, text);
});

Then(/^I am pressing (.*) key on Google$/, async (text) => {
    await t.pressKey(text);
});

Then(/^I should see that the first Google\'s result is (.*)$/, function (text) {
    var firstLink = Selector('#rso').find('a').with({ boundTestRun: t });

    return t.expect(firstLink.innerText).contains(text);
});