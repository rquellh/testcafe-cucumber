# Integration of TestCafe and CucumberJS

This is a demonstration of integration [TestCafe](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe 0.19.0 and Cucumber 4.0.0.

Big thank you to [helen-dikareva](https://github.com/helen-dikareva/) for your help in starting the integration with your [repo](https://github.com/helen-dikareva/testcafe-cucumber-demo). This is a fork of all of the hard work you've put in. 

Also, thanks to the team at [TestCafe](https://github.com/DevExpress/testcafe) for allowing testers to break away from Selenium.

## Requirements
* TestCafe - 0.19.0
* CucumberJS - 4.0.0

## Installation 

1. Use the `npm install` command

## Running tests

You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt

## Debugging in VSCode

This will also allow you to debug in VSCode. 

1. Tag the Scenarios you want to debug with the `@debug` tag

2. Navigate to Debug `Ctrl + Shift + d` and click "Start Debugging"

## Helpful VSCode Extensions

* [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) is a really helpful VSCode extension that does Cucumber syntax highlighting, autocomplete, and other things that are really helpful when working with Cucumber. The good news is, I've already setup everything you need in the settings.json file, so all you need to do is install it. 


## Notes

* As of the time I am writting this, there is only 1 passing test of 3. I decided to not make all of the tests passing, so you could see how failures are handled. 

* My solution closes the TestCafe browser between each scenario. I tried to keep it open between scenarios but had trouble with handling failures. If you find a solution, I'd like to know.

* With TestCafe version 0.19.0, you no longer have to manually update stack-chain. Thank you to the TestCafe crew for making the integration much easier.