"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Employee {
    static getEmployee(CountryCode, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield axios_1.default.get(`https://restcountries.eu/rest/v2/alpha/${CountryCode}?fields=name;currencies;languages;timezones`);
            const { currencies, languages, timezones } = result.data;
            //I'm not sure if you are looking at the currency code or name so I will just post this here
            //if you want the name then uncomment the line below
            // const currency = currencies[0].name;
            const currency = currencies[0].code;
            //You want a list of language/s. Not sure if you want the name of the language or the whole object
            return Object.assign(Object.assign({}, user), { languages, currency, timezones });
        });
    }
}
exports.default = Employee;
