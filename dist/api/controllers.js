"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers = {
    dummy: function (req, res) {
        var responseJson = {
            title: "I am dummy title",
            body: "I am dummy body"
        };
        res.json(responseJson);
    }
};
exports.default = controllers;
//# sourceMappingURL=controllers.js.map