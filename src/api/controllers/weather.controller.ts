import {Request,Response, response} from 'express';
import {getWeahterCurrentCity,getWeahterForecastCity} from '../services/weahter.service';
import { getLocationIp } from '../services/location.service';


export const weatherController = async (req:Request,res:Response) => {
    let cityName:string;
    
    if(req.params.city){
        cityName = req.params.city;
    }else{
        const {city} = await getLocationIp(req);
        cityName = city;
    }
    
    const {main,name,weather} = await getWeahterCurrentCity(cityName);
    res.json({city:name,temperature:main,weather})
}

export const getForecast = async (req:Request,res:Response) => {
    let cityName:string;
    if(req.params.city){
        cityName = req.params.city;
    }else{
        const {city} = await getLocationIp(req);
        cityName = city;
    }

    const {city,list} = await getWeahterForecastCity(cityName);
    res.json({city,list})

}
