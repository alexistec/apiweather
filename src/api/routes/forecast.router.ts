import {Router} from 'express';
import {getForecast} from '../controllers/weather.controller';

export const forecastRouter = Router();

forecastRouter.get('/:city?',getForecast)