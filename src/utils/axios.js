const baseURL = "https://ue-todo-app-backend.herokuapp.com"

const axios = require('axios');
const config = {
    baseURL:`${baseURL}`,
    timeout: 2000,
    headers:{"Content-Type" : "application/x-www-form-urlencoded"}
};


export const axiosInstance = axios.create(config);
export const axiosInstanceForCDC = axios.create({...config,baseURL:`http://127.0.0.1:3030`});