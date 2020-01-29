"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sourceMaps = __importStar(require("source-map-support"));
var bolt_1 = require("@slack/bolt");
sourceMaps.install();
var app = new bolt_1.App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    logLevel: bolt_1.LogLevel.INFO
});
app.message('hello', function (_a) {
    var message = _a.message, say = _a.say;
    say({
        text: "dummy response",
        blocks: [{
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Pick a date for me to remind you"
                },
                "accessory": {
                    "type": "datepicker",
                    "action_id": "datepicker_remind",
                    "initial_date": "2019-04-28",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select a date"
                    }
                }
            }]
    });
});
app.action('button_click', function (_a) {
    var body = _a.body, ack = _a.ack, say = _a.say;
    ack();
    say("<@" + body.user.id + "> clicked the button");
});
exports.default = app;
//# sourceMappingURL=app.js.map