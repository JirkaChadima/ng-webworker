var tests = Object.keys(window.__karma__.files).filter(function (strFile) {
    return /\.test\.js$/.test(strFile);
});

//Phantom doesn't handle window.Blob right, so we are going to set it to false
if (window.navigator.userAgent.indexOf('PhantomJS') != -1) {
    window.Blob = false;
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',
    paths: {
        "src/ng-webworker": "src/ng-webworker",
        "angularjs": "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min",
        "angular-mocks": "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular-mocks"
    },
    shim: {
        "angularjs": {
            exports: "angular",
            deps: [
            ]
        },
        "angular-mocks": {
            exports: "angular",
            deps: [
                "angularjs"
            ]
        },
        "src/ng-webworker": {
            deps: [
                "angularjs"
            ]
        }

    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

require(["angular-mocks"]);
