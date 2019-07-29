import {by} from "protractor";

export = {
    LOC_ContinueButton: by.css("#header+div .button-main-content"),
    LOC_CreditCardButton: by.css("#payment-list .list[href=\"#/credit-card\"]"),
    LOC_PaymentFrame: by.id("snap-midtrans"),
    LOC_CardNumberTextBox: by.css(".input-group.col-xs-12 input[name=cardnumber]"),
    LOC_ExpiryDateTextBox: by.css(".input-group.col-xs-7 input[type=tel]"),
    LOC_CVVTextBox: by.css(".input-group.col-xs-5 input[type=tel]"),
    LOC_3DSPINTextBox: by.css("#PaRes"),
    LOC_3DSOKButton: by.xpath("//*[@id=\"acsForm\"]/div[6]/div/button[1]"),
    LOC_TransactionFail: by.xpath("//*[@id=\"application\"]/div[3]/div/div/div/div/div/div[1]/span"),
    LOC_TransactionSuccess: by.xpath("//*[@id=\"application\"]/div[3]/div/div/div/div/div/div[2]")

}