# Integration of TestCafe and CucumberJS

This is a demonstration of integration [TestCafé](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe and Cucumber.

Big thank you to [helen-dikareva](https://github.com/helen-dikareva/) for your help in starting the integration with your [repo](https://github.com/helen-dikareva/testcafe-cucumber-demo). This is a fork of all of the hard work you've put in. 

Also, thanks to the team at [TestCafé](https://github.com/DevExpress/testcafe) for allowing testers to break away from Selenium.

**Depreciation Notice** - [There are talks to officially support the Gherkin syntax in TestCafé](https://github.com/DevExpress/testcafe/issues/1373#issuecomment-291526857). Once those changes are in place I will no longer support this repo. Please voice your support of these changes becoming native to TestCafé.

## Versions
<table>
<tr>
    <td>TestCafé</td>
    <td>1.1.0</td>
</tr>
<tr>
    <td>CucumberJS</td>
    <td>5.1.0</td>
</tr>
</table>

## Installation 

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Navigate to the root of the repo
3. Use the `npm install` command

## Running tests

### Windows
You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt

### Mac or Linux
You can run tests by executing `node_modules/cucumber/bin/cucumber-js`

## Documentation
* [Initial Setup](https://github.com/rquellh/testcafe-cucumber/wiki/Initial-Setup)
  * [Debuging in VSCode](https://github.com/rquellh/testcafe-cucumber/wiki/Debugging-in-VSCode)
* [Using TestCafé](https://github.com/rquellh/testcafe-cucumber/wiki/Using-TestCafe)
  * [Creating your first test](https://github.com/rquellh/testcafe-cucumber/wiki/Creating-your-first-test)
  * [Selectors](https://github.com/rquellh/testcafe-cucumber/wiki/Selectors)
  * [Actions](https://github.com/rquellh/testcafe-cucumber/wiki/Actions)
  * [Assertions](https://github.com/rquellh/testcafe-cucumber/wiki/Assertions)
* [TestCafé & CucumberJS](https://github.com/rquellh/testcafe-cucumber/wiki/TestCafe-&-CucumberJS)
  * [Helpful VSCode Setup](https://github.com/rquellh/testcafe-cucumber/wiki/Helpful-VSCode-Setup)
  * [Creating Features](https://github.com/rquellh/testcafe-cucumber/wiki/Creating-Features)
  * [Creating Step Definitions](https://github.com/rquellh/testcafe-cucumber/wiki/Creating-Step-Definitions)
  * [Adding TestCafé Functionality to Cucumber steps](https://github.com/rquellh/testcafe-cucumber/wiki/Adding-TestCafe-Functionality-to-Cucumber-steps)
  * [Harnessing Cucumber's Power](https://github.com/rquellh/testcafe-cucumber/wiki/Harnessing-Cucumber's-Power)
  * [Page Object](https://github.com/rquellh/testcafe-cucumber/wiki/Page-Object)
  * [Running Tests](https://github.com/rquellh/testcafe-cucumber/wiki/Running-Tests)
  * [Reporting and Taking Screenshots](https://github.com/rquellh/testcafe-cucumber/wiki/Reporting-and-Taking-Screenshots)

## Notes

* As of the time I am writting this, there is only 1 passing test of 3. I decided to not make all of the tests passing, so you could see how failures are handled. 

* My solution closes the TestCafé browser between each scenario. I tried to keep it open between scenarios but had trouble with handling failures. If you find a solution, I'd like to know.

* With TestCafé version 0.19.0, you no longer have to manually update stack-chain. Thank you to the TestCafé crew for making the integration much easier.

## Contributors 
Thanks to everyone who has contributed to this project over the last few years.

[<img alt="cmasekar" src="https://avatars0.githubusercontent.com/u/6192576?s=460&v=4" width="115">](https://github.com/cmasekar) |[<img alt="benkirbyten10" src="https://avatars0.githubusercontent.com/u/29120362?s=460&v=4" width="115">](https://github.com/benkirbyten10) |[<img alt="vvedachalam" src="https://avatars1.githubusercontent.com/u/7630355?s=460&v=4" width="115">](https://github.com/vvedachalam) |[<img alt="azzra" src="https://avatars3.githubusercontent.com/u/9268494?s=460&v=4" width="115">](https://github.com/azzra) |
:---: |:---: |:---: |:---: |
