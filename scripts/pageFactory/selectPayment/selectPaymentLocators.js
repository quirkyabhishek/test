"use strict";
const protractor_1 = require("protractor");
module.exports = {
    LOC_ContinueButton: protractor_1.by.css("#header+div .button-main-content"),
    LOC_CreditCardButton: protractor_1.by.css("#payment-list .list[href=\"#/credit-card\"]"),
    LOC_PaymentFrame: protractor_1.by.id("snap-midtrans"),
    LOC_CardNumberTextBox: protractor_1.by.css(".input-group.col-xs-12 input[name=cardnumber]"),
    LOC_ExpiryDateTextBox: protractor_1.by.css(".input-group.col-xs-7 input[type=tel]"),
    LOC_CVVTextBox: protractor_1.by.css(".input-group.col-xs-5 input[type=tel]"),
    LOC_3DSPINTextBox: protractor_1.by.css("#PaRes"),
    LOC_3DSOKButton: protractor_1.by.xpath("//*[@id=\"acsForm\"]/div[6]/div/button[1]"),
};
//# sourceMappingURL=selectPaymentLocators.js.map