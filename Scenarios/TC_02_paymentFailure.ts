import {browser, by, element} from "protractor";
import {async} from "q";
import {homePage} from "../pageFactory/homePage/homePage";
import {enterDetailsPage} from "../pageFactory/enterDetails/enterDetailsPage";
import {selectPaymentPage} from "../pageFactory/selectPayment/selectPaymentPage";

describe("pillowPaymentFailure", async () => {
    it("Open Application", async () => {
        await browser.waitForAngularEnabled(false);
        browser.get("https://demo.midtrans.com/");
    });

    it("Buy Now", async () => {
        const home = new homePage();
        await home.validateButton();
        await home.clickBuyNow();
    });

    it("Checkout", async () => {
        await browser.waitForAngularEnabled(false);
        const cart = new enterDetailsPage();
        await cart.validateCheckoutButton();
        await cart.clickCheckout();
    });

    it("Open Payment Frame", async () => {
        await browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage();
        await pay1.selectPaymentFrame();
    });

    it("Continue", async () => {
        await browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage();
        await pay.validateContinueButton();
        await pay.clickContinuePay();
    });

    it("Credit Card", async () => {
        await browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage();
        await pay2.clickCreditCardButton();
    });

    it("Enter Credit Card Details", async () => {
        await browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage();
        await pay2.enterCCNumber();
        await pay2.enterExpiryDate();
        await pay2.enterCVVCode();
    });

    it("Pay Now", async () => {
        await browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage();
        await pay.clickContinuePay();
    });

    it("Open Payment Frame", async () => {
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

    it("Open Payment Frame", async () => {
        await browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage();
        await pay1.selectPaymentFrame();
    });

    it("Success Status", async () => {
        await browser.waitForAngularEnabled(false);
        const status = new selectPaymentPage();
        await status.getTransactionStatusSuccess();
    });

});