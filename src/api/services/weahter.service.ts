require("dotenv").config();
const {IP_API_URL,API_WEATHER_URL,API_WEATHER_KEY} = process.env;
const fetch = require('node-fetch');
const url = API_WEATHER_URL;

export const getWeahterCurrentCity = async (city:string) => {
    const data = await fetch(`${url}/weather?q=${city}&units=metric&appid=${API_WEATHER_KEY}`);
    const result = await data.json();
    return result
}

export const getWeahterForecastCity = async (city:string) => {
    const data = await fetch(`${url}/forecast?q=${city}&units=metric&appid=${API_WEATHER_KEY}`);
    const result = await data.json();
    return result
}
