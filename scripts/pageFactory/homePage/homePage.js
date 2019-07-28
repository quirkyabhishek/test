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
const homePageAction_1 = require("./homePageAction");
const homePageCheck_1 = require("./homePageCheck");
class homePage {
    constructor() {
        this.action = new homePageAction_1.homePageAction();
        this.check = new homePageCheck_1.homePageCheck();
    }
    clickBuyNow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickBuyNowButton();
        });
    }
    validateButton() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield this.check.getButtonName();
            expect(name).toEqual("BUY NOW", "Button name not displayed properly");
            console.log("Buy Now Name Matched");
        });
    }
}
exports.homePage = homePage;
//# sourceMappingURL=homePage.js.map