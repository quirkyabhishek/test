import {element} from "protractor";
import locators = require('./selectPaymentLocators');

export class selectPaymentActions {

    public async clickContinueButton() {
        await element(locators.LOC_ContinueButton).click();
        console.log("After Click3");
    }
    public async clickCreditCardButton() {
        await element(locators.LOC_CreditCardButton).click();
        console.log("After Click4");
    }
}