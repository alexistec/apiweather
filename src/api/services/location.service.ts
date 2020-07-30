require("dotenv").config();
const url = process.env.IP_API_URL;
const fetch = require('node-fetch');

export const getLocationIp =  async (req:any) =>{
    //validar a IPV6
    const ip      = req.connection.remoteAddress;
    const ipUser  = ip === '::1' ? '54.215.236.228' : ip;
    const data    = await fetch(`${url}/${ipUser}`);
    const result  = await data.json();
    return result;
};