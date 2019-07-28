import {element} from "protractor";
import locators = require('./homePageLocators');

export class homePageCheck {

    async getButtonName(): Promise<string> {
        return await element(locators.LOC_BuyNowButton).getText();
    }
}