# Integration of TestCafe and CucumberJS

This is a demonstration of integration [TestCafe](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe 0.19.2 and Cucumber 4.2.1.

Big thank you to [helen-dikareva](https://github.com/helen-dikareva/) for your help in starting the integration with your [repo](https://github.com/helen-dikareva/testcafe-cucumber-demo). This is a fork of all of the hard work you've put in. 

Also, thanks to the team at [TestCafe](https://github.com/DevExpress/testcafe) for allowing testers to break away from Selenium.

## Requirements
* TestCafe - 0.19.2
* CucumberJS - 4.2.1

## Installation 

1. Use the `npm install` command

## Running tests

### Windows
You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt

### Mac or Linux
You can run tests by executing `node_modules/cucumber/bin/cucumber-js`

## Helpful VSCode Setup
I've included a [wiki page](https://github.com/rquellh/testcafe-cucumber/wiki/Helpful-VSCode-Setup) for [debugging](https://github.com/rquellh/testcafe-cucumber/wiki/Helpful-VSCode-Setup#debug-setup) and setting up a [Cucumber syntax extenstion](https://github.com/rquellh/testcafe-cucumber/wiki/Helpful-VSCode-Setup#setting-up-cucumber-language-support). 

## Notes

* As of the time I am writting this, there is only 1 passing test of 3. I decided to not make all of the tests passing, so you could see how failures are handled. 

* My solution closes the TestCafe browser between each scenario. I tried to keep it open between scenarios but had trouble with handling failures. If you find a solution, I'd like to know.

* With TestCafe version 0.19.0, you no longer have to manually update stack-chain. Thank you to the TestCafe crew for making the integration much easier.
