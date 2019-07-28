import {element} from "protractor";
import locators = require('./enterDetailsLocators');

export class enterDetailsActions {

    public async clickCheckoutButton() {
        await element(locators.LOC_CheckoutButton).click();
        console.log("After Click2");
    }
}