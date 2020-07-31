import { Request, Response } from 'express';
import { getLocationIp } from '../services/location.service';

export async function  locationController(req:Request, res:Response){
    const location = await getLocationIp(req);
    res.json(location);
}