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
const protractor_1 = require("protractor");
const homePage_1 = require("../pageFactory/homePage/homePage");
const enterDetailsPage_1 = require("../pageFactory/enterDetails/enterDetailsPage");
const selectPaymentPage_1 = require("../pageFactory/selectPayment/selectPaymentPage");
describe("pillowPaymentFailure", () => __awaiter(this, void 0, void 0, function* () {
    it("Open Application", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("https://demo.midtrans.com/");
    }));
    it("Buy Now", () => __awaiter(this, void 0, void 0, function* () {
        const home = new homePage_1.homePage();
        yield home.validateButton();
        yield home.clickBuyNow();
    }));
    it("Checkout", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const cart = new enterDetailsPage_1.enterDetailsPage();
        yield cart.validateCheckoutButton();
        yield cart.clickCheckout();
    }));
    it("Open Payment Frame", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage_1.selectPaymentPage();
        yield pay1.selectPaymentFrame();
    }));
    it("Continue", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage_1.selectPaymentPage();
        console.log("reached iFrame");
        yield pay.selectPaymentFrame();
        yield pay.validateContinueButton();
        yield pay.clickContinuePay();
    }));
    it("Credit Card", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage_1.selectPaymentPage();
        yield pay2.clickCreditCardButton();
    }));
}));
//# sourceMappingURL=TC_02_paymentFailure.js.map