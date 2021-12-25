const baseURL = "http://127.0.0.1"
const port = "5000";

const axios = require('axios');
const config = {
    baseURL:`${baseURL}:${port}`,
    timeout: 2000,
    headers:{"Content-Type" : "application/x-www-form-urlencoded"}
};


export const axiosInstance = axios.create(config);
export const axiosInstanceForCDC = axios.create({...config,baseURL:`http://127.0.0.1:3030`});