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
        console.log("reached iFrame")
        await pay.selectPaymentFrame();
        await pay.validateContinueButton();
        await pay.clickContinuePay();
    });

    it("Credit Card", async () => {
        await browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage();
        await pay2.clickCreditCardButton();
    });
});