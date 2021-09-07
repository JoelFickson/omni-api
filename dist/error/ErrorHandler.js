"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const errorHandler = (err, req, res, next) => {
    winston_1.default.error(err.message, err);
    return res.status(500).json({
        error: true,
        message: "There was an internal server error.",
        data: err
    });
};
exports.default = errorHandler;
