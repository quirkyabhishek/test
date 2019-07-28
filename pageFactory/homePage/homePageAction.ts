import {element} from "protractor";
import locators = require('./homePageLocators');

export class homePageAction {

    public async clickBuyNowButton() {
        await element(locators.LOC_BuyNowButton).click();
        console.log("After Click");
    }
}