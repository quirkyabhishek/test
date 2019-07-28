"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selectPaymentActions_1 = require("./selectPaymentActions");
const selectPaymentChecks_1 = require("./selectPaymentChecks");
const protractor_1 = require("protractor");
const locator = require("./selectPaymentLocators");
class selectPaymentPage {
    constructor() {
        this.action = new selectPaymentActions_1.selectPaymentActions();
        this.check = new selectPaymentChecks_1.selectPaymentChecks();
    }
    selectPaymentFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.switchTo().frame(protractor_1.element(locator.LOC_PaymentFrame));
        });
    }
    clickContinuePay() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickContinueButton();
        });
    }
    validateContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield this.check.getContinueButtonName();
            expect(name).toEqual("CONTINUE", "Button name not displayed properly");
            console.log("Continue Text Matched");
        });
    }
    clickCreditCardButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickCreditCardButton();
        });
    }
}
exports.selectPaymentPage = selectPaymentPage;
//# sourceMappingURL=selectPaymentPage.js.map