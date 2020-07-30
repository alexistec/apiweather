import {Router} from 'express';
import {weatherController} from '../controllers/weather.controller';


export const currentRouter = Router();

currentRouter.get('/:city?',weatherController);
