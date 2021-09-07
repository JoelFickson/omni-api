"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = __importDefault(require("./error/ErrorHandler"));
const user_1 = __importDefault(require("./routes/user"));
const Logger_1 = require("./error/Logger");
(0, Logger_1.AppLogger)();
const server = (0, express_1.default)();
server.use(express_1.default.urlencoded({ extended: false }));
server.use(express_1.default.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});
server.use('/', user_1.default);
/** Error handling */
server.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
server.use(ErrorHandler_1.default);
const httpServer = http_1.default.createServer(server);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
