"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sourceMaps = __importStar(require("source-map-support"));
sourceMaps.install();
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var logger_1 = require("./utils/logger");
var routes_1 = __importDefault(require("./api/routes"));
logger_1.logger.debug('creating app');
var App = (function () {
    function App() {
        this.express = express_1.default();
        this.middleware();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(morgan_1.default('combined', { stream: logger_1.stream }));
    };
    App.prototype.routes = function () {
        routes_1.default(this.express);
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map