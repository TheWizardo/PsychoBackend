import express from 'express';
import catchAll from './Middleware/catch-all';
import routeNotFound from './Middleware/route-not-found';
import questionsController from './Controllers/questions-controller';
import expressRateLimit from 'express-rate-limit';
import cors from 'cors';
import logger from './Middleware/logger-mw';
import config from './Utils/config';

const server = express();

server.use(cors());
server.use("/", expressRateLimit({windowMs: 500, max: 20, message: "Please try again later"}));

server.use(express.json());
server.use(logger); ///////////////////////////////////////////////////////////////////////////////////////////////
server.use("/", questionsController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(config.port, () => console.log(`Listening on http://localhost:${config.port}`));