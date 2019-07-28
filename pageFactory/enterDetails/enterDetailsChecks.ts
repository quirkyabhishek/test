import {element} from "protractor";
import locators = require('./enterDetailsLocators');

export class enterDetailsChecks {

    async getCheckoutButtonName(): Promise<string> {
        return await element(locators.LOC_CheckoutButton).getText();
    }
}