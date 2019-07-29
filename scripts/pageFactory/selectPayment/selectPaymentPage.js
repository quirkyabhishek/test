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
const locators = require("./selectPaymentLocators");
const WaitUtil_1 = require("../../Common/WaitUtil");
class selectPaymentPage {
    constructor() {
        this.action = new selectPaymentActions_1.selectPaymentActions();
        this.check = new selectPaymentChecks_1.selectPaymentChecks();
    }
    selectPaymentFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.switchTo().frame(0);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    clickContinuePay() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForContinueToDisplay(5000);
            yield this.action.clickContinueButton();
        });
    }
    validateContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForContinueToDisplay(5000);
            const name = yield this.check.getContinueButtonName();
            expect(name).toEqual("CONTINUE", "Button name not displayed properly");
            console.log("Continue Text Matched");
        });
    }
    clickCreditCardButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForCreditCardToDisplay(5000);
            yield this.action.clickCreditCardButton();
        });
    }
    waitForContinueToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield WaitUtil_1.WaitUtil.waitForElementVisible(locators.LOC_ContinueButton, timeout);
        });
    }
    /*    public async waitForSuccessToDisplay(timeout: number): Promise<boolean> {
            return await WaitUtil.waitForElementVisible(locators.LOC_ContinueButton, timeout);
        }*/
    waitForStatusToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield WaitUtil_1.WaitUtil.waitForElementVisible(locators.LOC_ContinueButton, timeout);
        });
    }
    waitForCreditCardToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield WaitUtil_1.WaitUtil.waitForElementVisible(locators.LOC_CreditCardButton, timeout);
        });
    }
    waitForCreditCardFieldsToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield WaitUtil_1.WaitUtil.waitForElementVisible(locators.LOC_CardNumberTextBox, timeout);
        });
    }
    waitForCredit3DSFieldsToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield WaitUtil_1.WaitUtil.waitForElementVisible(locators.LOC_3DSPINTextBox, timeout);
        });
    }
    /*    public async enterCCNumber() {
            await this.waitForCreditCardFieldsToDisplay(5000);
            await this.action.enterCardNumber("4811111111111114");
        }*/
    enterExpiryDate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForCreditCardFieldsToDisplay(5000);
            yield this.action.enterExpiry("02/20");
        });
    }
    enterCVVCode() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForCreditCardFieldsToDisplay(5000);
            yield this.action.enterCvv("123");
        });
    }
    enter3DSCode() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForCredit3DSFieldsToDisplay(5000);
            yield this.action.enter3DS("112233");
        });
    }
    click3DSOK() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickOKon3DS();
            yield this.waitForStatusToDisplay(2000);
        });
    }
    getTransactionStatusSuccess() {
        return __awaiter(this, void 0, void 0, function* () {
            /*        await this.waitForSuccessToDisplay(5000);*/
            const name1 = yield this.check.getTransactionSuccess();
            expect(name1).toEqual("DONE", "Transaction Status Missed");
            console.log("Transaction successful");
        });
    }
    getTransactionStatusFail() {
        return __awaiter(this, void 0, void 0, function* () {
            /*        await this.waitForFailureToDisplay(5000);*/
            const name2 = yield this.check.getTransactionFailure();
            expect(name2).toEqual("RETRY", "Transaction Status Missed");
            console.log("Transaction failed");
        });
    }
}
exports.selectPaymentPage = selectPaymentPage;
//# sourceMappingURL=selectPaymentPage.js.map