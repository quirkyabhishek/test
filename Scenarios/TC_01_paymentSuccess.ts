import {browser, by, element} from "protractor";
import {homePage} from "../pageFactory/homePage/homePage";
import {enterDetailsPage} from "../pageFactory/enterDetails/enterDetailsPage";
import {selectPaymentPage} from "../pageFactory/selectPayment/selectPaymentPage";
import {selectPaymentActions} from "../pageFactory/selectPayment/selectPaymentActions";

describe("pillowPaymentSuccess", async () => {
    it("Open Application", async () => {
        await browser.waitForAngularEnabled(false);
        browser.get("https://demo.midtrans.com/");
    });

    it("Validate and Click on Buy Now", async () => {
        const home = new homePage();
        await home.validateButton();
        await home.clickBuyNow();
    });

    it("Validate and Click on Checkout", async () => {
        await browser.waitForAngularEnabled(false);
        const cart = new enterDetailsPage();
        await cart.validateCheckoutButton();
        await cart.clickCheckout();
    });

    it("Switch to Payment iFrame", async () => {
        await browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage();
        await pay1.selectPaymentFrame();
    });

    it("Click on Continue Button", async () => {
        await browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage();
        await pay.validateContinueButton();
        await pay.clickContinuePay();
    });

    it("Select Credit Card from list of Payment Methods", async () => {
        await browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage();
        await pay2.clickCreditCardButton();
    });

    it("Enter Credit Card Details", async () => {
        await browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage();
        const pay = new selectPaymentActions();
        await pay.enterCardNumber("4811111111111114");
/*        await pay2.enterCCNumber();*/
        await pay2.enterExpiryDate();
        await pay2.enterCVVCode();
    });

    it("Click on Pay Now", async () => {
        await browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage();
        await pay.clickContinuePay();
    });

    it("Remain in Payment iFrame", async () => {
        await browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage();
        await pay1.selectPaymentFrame();
    });

    it("Enter 3DS PIN", async () => {
        await browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage();
        await pay2.enter3DSCode();
    });
    it("Click 3DS OK Button", async () => {
        await browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage();
        await pay.click3DSOK();
    });

    it("Remain in Payment iFrame", async () => {
        await browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage();
        await pay1.selectPaymentFrame();
    });

    it("Check Transaction Success Status", async () => {
        await browser.waitForAngularEnabled(false);
        const status = new selectPaymentPage();
        await status.getTransactionStatusSuccess();
    });

});