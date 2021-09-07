"use strict";
exports.__esModule = true;
exports.AppLogger = void 0;
var winston = require("winston");
var AppLogger = function () {
    winston.add(new winston.transports.File({ filename: 'logs/logfile.txt' }));
    process.on('unhandledRejection', function (reason, p) {
        winston.error(reason, p);
    }).on('uncaughtException', function (err) {
        winston.error(err.message, err);
    });
};
exports.AppLogger = AppLogger;
