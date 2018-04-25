const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.github = {
    url: function() {
        return 'https://github.com/';
    },
    searchBox: function() {
        return select('.header-search-input');
    },
    firstSearchResult: function() {
        return Selector('.repo-list-item').nth(0).with({boundTestRun: testController});
    },
    loginButton: function() {
        return select('.btn.btn-primary.btn-block');
    },
    loginErrorMessage: function() {
        return select('#js-flash-container > div > div');
    },
    searchButton: function() {
        return select('.header-search-input');
    },
    firstSearchResult: function() {
        return Selector('.repo-list-item').nth(0).with({boundTestRun: testController});
    },
};
