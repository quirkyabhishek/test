import {selectPaymentActions} from "./selectPaymentActions";
import {selectPaymentChecks} from "./selectPaymentChecks";
import {browser, by, element} from "protractor";
import locator = require('./selectPaymentLocators');

export class selectPaymentPage {
    action;
    check;
    constructor() {
        this.action = new selectPaymentActions();
        this.check = new selectPaymentChecks();
    }

    public async selectPaymentFrame(){
        browser.switchTo().frame(element(locator.LOC_PaymentFrame));
}

    public async clickContinuePay() {
        await this.action.clickContinueButton();
    }

    public async validateContinueButton() {
        const name = await this.check.getContinueButtonName();
        expect(name).toEqual("CONTINUE", "Button name not displayed properly");
        console.log("Continue Text Matched");
    }
    public async clickCreditCardButton() {
        await this.action.clickCreditCardButton();
    }
}