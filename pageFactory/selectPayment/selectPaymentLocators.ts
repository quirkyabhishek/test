import {by} from "protractor";

export = {
    LOC_ContinueButton: by.css(".app-container a[class~=button-main-content]"),
    LOC_CreditCardButton: by.css(".content-list a[class~=list]"),
    LOC_PaymentFrame: by.id("snap-midtrans")
}