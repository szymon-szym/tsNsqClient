"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = __importDefault(require("./controllers"));
var routes = function (app) {
    app.route('/dummy')
        .get(controllers_1.default.dummy);
};
exports.default = routes;
//# sourceMappingURL=routes.js.map