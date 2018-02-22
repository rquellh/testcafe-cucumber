var { Given, When, Then } = require('cucumber');
var Selector = require('testcafe').Selector;
var Role = require('testcafe').Role;
var githubPage = require('../support/pages/github-page');

Given(/^I am open GitHub page$/, function () {
    return testController.navigateTo('https://github.com/');
});

When(/^I am typing my search request "([^"]*)" on GitHub$/, function (text) {
    var input = Selector('.header-search-input').with({ boundTestRun: testController });

    return testController.typeText(input, text)
});

Then(/^I am pressing (.*) key on GitHub$/, function (text) {
    return testController.pressKey(text);
});

Then(/^I should see that the first GitHub\'s result is (.*)$/, function (text) {
    var firstLink = Selector('.repo-list-item').nth(0).with({ boundTestRun: testController });

    return testController.expect(firstLink.innerText).contains(text);
});

const gitHubRoleForExample = Role('http://github.com/login', function (t) {
    return t
        .click('.btn.btn-primary.btn-block')
        .expect(Selector('#js-flash-container > div > div').innerText).contains("Incorrect username or password.");
});

Then(/^I am trying to use (.*)$/, function (text) {
    return testController.useRole(gitHubRoleForExample);
});