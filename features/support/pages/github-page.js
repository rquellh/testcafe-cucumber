var {Selector} = require('testcafe')

//Selectors
exports.github = {
    url: function() {
        return 'https://github.com/'
    }
}

exports.navigateToGithub = function() {
    return t.navigateTo('https://github.com/')
}
