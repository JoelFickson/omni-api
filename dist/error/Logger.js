"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogger = void 0;
const winston = require("winston");
const AppLogger = () => {
    winston.add(new winston.transports.File({ filename: 'logs/logfile.txt' }));
    process.on('unhandledRejection', (reason, p) => {
        winston.error(reason, p);
    }).on('uncaughtException', err => {
        winston.error(err.message, err);
    });
};
exports.AppLogger = AppLogger;
