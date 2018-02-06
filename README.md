# Integration of TestCafe and CucumberJS

This is a demonstration of integration [TestCafe](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe 0.18.6 and Cucumber 4.0.0.

Big thank you to [helen-dikareva](https://github.com/helen-dikareva/) for your help in starting the integration with your [repo](https://github.com/helen-dikareva/testcafe-cucumber-demo). This is a fork of all of the hard work you've put in. 

Also, thanks to the team at [TestCafe](https://github.com/DevExpress/testcafe) for allowing testers to break away from Selenium.

## Requirements
* TestCafe - 0.18.6
* CucumberJS - 4.0.0

## Installation 

1. Use the `npm install` command

2. Then open the TestCafe package.json file in the node_modules folder

3. Replace the stack-chain dependency with `"stack-chain": "^2.0.0"`

4. In the terminal navigate to the testcafe file under node_modules `cd .\node_modules\testcafe\`

5. Use the `npm update` command


## Running tests

You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt

## Debugging in VSCode

This will also allow you to debug in VSCode. 

1. Tag the Scenarios you want to debug with the `@debug` tag

2. Navigate to Debug `Ctrl + Shift + d` and click "Start Debugging"


## Notes

* If you get something similar to the following error `'Conflicting version of stack-chain found'` you didn't update TestCafe to version 2.0.0 of stack-chain. Please, retry steps 2 - 6 in Installation. 

* As of the time I am writting this, there is only 1 passing test of 3. I decided to not make all of the tests passing, so you could see how failures are handled. 

* My solution closes the TestCafe browser between each scenario. I tried to keep it open between scenarios but had trouble with handling failures. If you find a solution, I'd like to know.