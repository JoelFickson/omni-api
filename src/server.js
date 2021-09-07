"use strict";
var _a;
exports.__esModule = true;
var http_1 = require("http");
var express_1 = require("express");
var ErrorHandler_1 = require("./error/ErrorHandler");
var user_1 = require("./routes/user");
var Logger_1 = require("./error/Logger");
(0, Logger_1.AppLogger)();
var server = (0, express_1["default"])();
server.use(express_1["default"].urlencoded({ extended: false }));
server.use(express_1["default"].json());
server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});
server.use('/', user_1["default"]);
/** Error handling */
server.use(function (req, res, next) {
    var error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
server.use(ErrorHandler_1["default"]);
var httpServer = http_1["default"].createServer(server);
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
httpServer.listen(PORT, function () { return console.log("The server is running on port " + PORT); });
