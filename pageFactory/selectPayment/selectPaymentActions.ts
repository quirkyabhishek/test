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

    public async enterCardNumber(ccnumber: string) {
        await element(locators.LOC_CardNumberTextBox).sendKeys(ccnumber);
    }

    public async enterExpiry(expirydate: string) {
        await element(locators.LOC_ExpiryDateTextBox).sendKeys(expirydate);
    }

    public async enterCvv(cvv: string) {
        await element(locators.LOC_CVVTextBox).sendKeys(cvv);
    }

    public async enter3DS(threeds: string) {
        await element(locators.LOC_3DSPINTextBox).sendKeys(threeds);
    }

    public async clickOKon3DS() {
        await element(locators.LOC_3DSOKButton).click();
        console.log("After Click6");
    }
}