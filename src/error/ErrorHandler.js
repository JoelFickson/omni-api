"use strict";
exports.__esModule = true;
var winston_1 = require("winston");
var errorHandler = function (err, req, res, next) {
    winston_1["default"].error(err.message, err);
    return res.status(500).json({
        error: true,
        message: "There was an internal server error.",
        data: err
    });
};
exports["default"] = errorHandler;
