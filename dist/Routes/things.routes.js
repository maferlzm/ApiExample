"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThingsRoutes = void 0;
var ThingsRoutes = /** @class */ (function () {
    function ThingsRoutes() {
    }
    ThingsRoutes.prototype.thingsRoutes = function (app) {
        //definiremos nuestras URLs
        app.get('/', function (req, res) {
            console.log('Entramos al get');
            return res.json('Hola esta es una prueba');
        });
    };
    return ThingsRoutes;
}());
exports.ThingsRoutes = ThingsRoutes;
