"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var things_routes_1 = require("../Routes/things.routes");
var App = /** @class */ (function () {
    function App() {
        this.thingsRoute = new things_routes_1.ThingsRoutes();
        this.app = express_1.default();
        this.config();
        this.thingsRoute.thingsRoutes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false })); //al abrir postman y mandamos algo por internet se tiene que cifrar 
        //con esto lo descifra y recibimos un json 
    };
    return App;
}());
exports.default = new App().app;
