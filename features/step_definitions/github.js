var { Given, When, Then } = require('cucumber');
var Selector = require('testcafe').Selector;
var Role = require('testcafe').Role;
var githubPage = require('../support/pages/github-page');

Given(/^I open the GitHub page$/, function () {
    return testController.navigateTo(githubPage.github.url());
});

When(/^I am typing my search request "([^"]*)" on GitHub$/, function (text) {
    return testController.typeText(githubPage.github.searchButton(), text)
});

Then(/^I am pressing (.*) key on GitHub$/, function (text) {
    return testController.pressKey(text);
});

Then(/^I should see that the first GitHub\'s result is (.*)$/, function (text) {
    return testController.expect(githubPage.github.firstSearchResult().innerText).contains(text);
});

const gitHubRoleForExample = Role(githubPage.github.url() + "login", function (t) {
    return t
        .click(githubPage.github.loginButton())
        .expect(githubPage.github.loginErrorMessage().innerText).contains("Incorrect username or password.");
});

Then(/^I am trying to use (.*)$/, function (text) {
    return testController.useRole(gitHubRoleForExample);
});