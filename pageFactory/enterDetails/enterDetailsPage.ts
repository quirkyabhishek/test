import {enterDetailsActions} from "./enterDetailsActions";
import {enterDetailsChecks} from "./enterDetailsChecks";

export class enterDetailsPage {
    action;
    check;
    constructor() {
        this.action = new enterDetailsActions();
        this.check = new enterDetailsChecks();
    }

    public async clickCheckout() {
        await this.action.clickCheckoutButton();
    }

    public async validateCheckoutButton() {
        const name = await this.check.getCheckoutButtonName();
        expect(name).toEqual("CHECKOUT", "Button name not displayed properly");
        console.log("Checkout Name Matched");
    }
}