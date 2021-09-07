import winston from "winston";


import type {ErrorRequestHandler} from "express";


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    winston.error(err.message, err)

    return res.status(500).json({
        error: true,
        message: "There was an internal server error.",
        data: err

    });
};


export default errorHandler;

