import http from 'http';
import express, {Express} from 'express';


import errorHandler from "./error/ErrorHandler";
import routes from './routes/user';

import {AppLogger} from "./error/Logger"

AppLogger();


const server: Express = express();

server.use(express.urlencoded({extended: false}));


server.use(express.json());


server.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});


server.use('/', routes);


/** Error handling */
server.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

server.use(errorHandler);


const httpServer = http.createServer(server);
const PORT: any = process.env.PORT ?? 5000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

