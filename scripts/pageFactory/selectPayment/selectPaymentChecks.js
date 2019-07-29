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
const protractor_1 = require("protractor");
const locators = require("./selectPaymentLocators");
class selectPaymentChecks {
    getContinueButtonName() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_ContinueButton).getText();
        });
    }
    getTransactionSuccess() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_TransactionSuccess).getText();
        });
    }
    getTransactionFailure() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_TransactionFail).getText();
        });
    }
}
exports.selectPaymentChecks = selectPaymentChecks;
//# sourceMappingURL=selectPaymentChecks.js.map