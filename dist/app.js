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
const index_1 = require("./db/index");
const express_1 = __importDefault(require("express"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        app.use((0, cors_1.default)());
        yield (0, index_1.connectionDB)();
        app.use(express_1.default.json()); // esto habilita la serializacion en formato json
        app.use(index_route_1.default);
        app.listen(8000, () => {
            console.log('Sever started');
        });
    });
}
main();
