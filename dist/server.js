"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./App/app"));
app_1.default.listen(5000, function () {
    console.log("Express corriendo en el puerto 5000");
});
