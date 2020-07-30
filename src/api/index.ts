import * as express from 'express';
import {
    locationRouter,
    homeRouter,
    currentRouter,
    forecastRouter
} from './routes/';

const api = express();

api.use('/',homeRouter);
api.use('/location',locationRouter);
api.use('/current',currentRouter);
api.use('/forecast',forecastRouter);

export default api;