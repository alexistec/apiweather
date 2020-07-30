import {Router} from 'express';
import {locationController} from '../controllers/location.controller';

export const locationRouter = Router();

locationRouter.get('/',locationController);