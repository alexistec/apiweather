import {Request,Response} from 'express';


export function homeController(req:Request,res:Response){
    res.json({
        "name": "apiweather",
        "version": "0.0.1",
        "description": "index.js",
        "license": "MIT",
    })
}