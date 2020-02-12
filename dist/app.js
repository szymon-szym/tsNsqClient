"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nsqjs_1 = require("nsqjs");
var reader = new nsqjs_1.Reader('test-topic', 'test', {
    lookupdHTTPAddresses: "172.18.0.2:4161",
    nsqdTCPAddresses: ['172.18.0.3:4150']
});
reader.connect();
console.log('connected');
reader.on('message', function (msg) {
    console.log("received a message " + msg.id + ": " + msg.body.toString());
    msg.finish();
});
reader.on('error', function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map