exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
    },
    specs: ["./scripts/Scenarios/TC_01_paymentSuccess.js",
        "./scripts/Scenarios/TC_02_paymentFailure.js"]
};
//# sourceMappingURL=config.js.map