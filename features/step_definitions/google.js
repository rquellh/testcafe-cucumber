const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('I am open Google\'s search page', async function() {
    await testController.navigateTo('https://google.com');
});

When('I am typing my search request {string} on Google', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('I press the {string} key on Google', async function(text) {
    await testController.pressKey(text);
});

Then('I should see that the first Google\'s result is {string}', async function(text) {
    var firstLink = Selector('#rso').find('a').with({boundTestRun: testController});
    await testController.expect(firstLink.innerText).contains(text);
});
