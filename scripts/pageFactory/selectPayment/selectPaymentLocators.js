"use strict";
const protractor_1 = require("protractor");
module.exports = {
    LOC_ContinueButton: protractor_1.by.css(".app-container a[class~=button-main-content]"),
    LOC_CreditCardButton: protractor_1.by.css(".content-list a[class~=list]"),
    LOC_PaymentFrame: protractor_1.by.id("snap-midtrans")
};
//# sourceMappingURL=selectPaymentLocators.js.map