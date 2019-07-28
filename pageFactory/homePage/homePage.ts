import {homePageAction} from "./homePageAction";
import {homePageCheck} from "./homePageCheck";

export class homePage {
    action;
    check;
    constructor() {
        this.action = new homePageAction();
        this.check = new homePageCheck();
    }

    public async clickBuyNow() {
        await this.action.clickBuyNowButton();
    }

    public async validateButton() {
        const name = await this.check.getButtonName();
        expect(name).toEqual("BUY NOW", "Button name not displayed properly");
        console.log("Buy Now Name Matched");
    }
}