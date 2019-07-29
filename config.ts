var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'firefox'
    },
    specs: ["./scripts/Scenarios/TC_01_paymentSuccess.js",
        "./scripts/Scenarios/TC_02_paymentFailure.js"],



     onPrepare:  () =>  {
            jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                    savePath: './test/reports'
                })
            );
        }
};
