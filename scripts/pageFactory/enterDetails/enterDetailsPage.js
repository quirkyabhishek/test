"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enterDetailsActions_1 = require("./enterDetailsActions");
const enterDetailsChecks_1 = require("./enterDetailsChecks");
class enterDetailsPage {
    constructor() {
        this.action = new enterDetailsActions_1.enterDetailsActions();
        this.check = new enterDetailsChecks_1.enterDetailsChecks();
    }
    clickCheckout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickCheckoutButton();
        });
    }
    validateCheckoutButton() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield this.check.getCheckoutButtonName();
            expect(name).toEqual("CHECKOUT", "Button name not displayed properly");
            console.log("Checkout Name Matched");
        });
    }
}
exports.enterDetailsPage = enterDetailsPage;
//# sourceMappingURL=enterDetailsPage.js.map