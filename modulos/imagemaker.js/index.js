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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maker = void 0;
const textprome_1 = require("./src/textprome");
const ephoto360_1 = require("./src/ephoto360");
const photooxy_1 = require("./src/photooxy");
class Maker {
    generateNewCookies() {
        return {
            textpro: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36',
                'cookie': `_ga=GA1.2.1174806771.${String(Date.now()).slice(0, 10)}; _gid=GA1.2.1118436800.${String(Date.now()).slice(0, 10)}; PHPSESSID=b55cbog2pn77j0cbguaqq33ou2`
            },
            ephoto: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.81 Safari/537.36',
                'cookie': `_gid=GA1.2.694836508.${String(Date.now()).slice(0, 10)}; __gads=ID=e77077076c5a18dc-223769e4b3cf00de:T=${String(Date.now()).slice(0, 10)}:RT=${String(Date.now()).slice(0, 10)}:S=ALNI_MZ54A8a-CdUL0GH7R1OPfiwplOIyQ; PHPSESSID=1b2hk17njmimvuim3celdji3q3; _ga=GA1.1.170505887.${String(Date.now()).slice(0, 10)}; _ga_SK0KDDQM5P=GS1.1.${String(Date.now()).slice(0, 10)}.2.1.${String(Date.now()).slice(0, 10)}.0`,
            }
        };
    }
    TextPro(url, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, textprome_1.TextPro)(url, text, this.generateNewCookies());
        });
    }
    Ephoto360(url, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, ephoto360_1.Ephoto360)(url, text, this.generateNewCookies());
        });
    }
    PhotoOxy(url, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, photooxy_1.PhotoOxy)(url, text, this.generateNewCookies());
        });
    }
}
exports.Maker = Maker;
;
