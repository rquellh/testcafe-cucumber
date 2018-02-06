var { setWorldConstructor } = require('cucumber');
const testControllerHolder = require('./testControllerHolder');

function CustomWorld() {
    this.waitForTestController = testControllerHolder.get
}

setWorldConstructor(CustomWorld)