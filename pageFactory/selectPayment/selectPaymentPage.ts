import {selectPaymentActions} from "./selectPaymentActions";
import {selectPaymentChecks} from "./selectPaymentChecks";
import {browser, by, element} from "protractor";
import locators = require('./selectPaymentLocators');
import {WaitUtil} from "../../Common/WaitUtil";

export class selectPaymentPage {
    action;
    check;
    constructor() {
        this.action = new selectPaymentActions();
        this.check = new selectPaymentChecks();
    }

    public async selectPaymentFrame(){
        try {
           await browser.switchTo().frame(0);
        } catch (e) {
         console.log(e);
        }
}

    public async clickContinuePay() {
        await this.waitForContinueToDisplay(5000);
        await this.action.clickContinueButton();
    }

    public async validateContinueButton() {
        await this.waitForContinueToDisplay(5000);
        const name = await this.check.getContinueButtonName();
        expect(name).toEqual("CONTINUE", "Button name not displayed properly");
        console.log("Continue Text Matched");
    }
    public async clickCreditCardButton() {
        await this.waitForCreditCardToDisplay(5000);
        await this.action.clickCreditCardButton();
    }
    public async waitForContinueToDisplay(timeout: number): Promise<boolean> {
        return await WaitUtil.waitForElementVisible(locators.LOC_ContinueButton, timeout);
    }
    public async waitForSuccessToDisplay(timeout: number): Promise<boolean> {
        return await WaitUtil.waitForElementVisible(locators.LOC_TransactionSuccess, timeout);
    }
    public async waitForCreditCardToDisplay(timeout: number): Promise<boolean> {
        return await WaitUtil.waitForElementVisible(locators.LOC_CreditCardButton, timeout);
    }
    public async waitForCreditCardFieldsToDisplay(timeout: number): Promise<boolean> {
        return await WaitUtil.waitForElementVisible(locators.LOC_CardNumberTextBox, timeout);
    }
    public async waitForCredit3DSFieldsToDisplay(timeout: number): Promise<boolean> {
        return await WaitUtil.waitForElementVisible(locators.LOC_3DSPINTextBox, timeout);
    }
    public async enterCCNumber() {
        await this.waitForCreditCardFieldsToDisplay(5000);
        await this.action.enterCardNumber("4811111111111114");
    }
    public async enterExpiryDate() {
        await this.waitForCreditCardFieldsToDisplay(5000);
        await this.action.enterExpiry("02/20");
    }
    public async enterCVVCode() {
        await this.waitForCreditCardFieldsToDisplay(5000);
        await this.action.enterCvv("123");
    }
    public async enter3DSCode() {
        await this.waitForCredit3DSFieldsToDisplay(5000);
        await this.action.enter3DS("112233");
    }

    public async click3DSOK() {
        await this.action.clickOKon3DS();
    }

    public async getTransactionStatusSuccess() {
        await this.waitForSuccessToDisplay(5000);
        const name = await this.check.getTransactionSuccess();
        expect(name).toEqual("Transaction successful", "Transaction Status Missed");
        console.log("Transaction successful");
    }

    public async getTransactionStatusFail() {
        await this.waitForSuccessToDisplay(5000);
        const name = await this.check.getTransactionStatusFail();
        expect(name).toEqual("Transaction failed", "Transaction Status Missed");
        console.log("Transaction failed");
    }
}