import {element} from "protractor";
import locators = require('./selectPaymentLocators');

export class selectPaymentChecks {

    async getContinueButtonName(): Promise<string> {
        return await element(locators.LOC_ContinueButton).getText();
    }

    async getTransactionSuccess(): Promise<string> {
        return await element(locators.LOC_ContinueButton).getText();
    }
    async getTransactionFailure(): Promise<string> {
        return await element(locators.LOC_ContinueButton).getText();
    }
}