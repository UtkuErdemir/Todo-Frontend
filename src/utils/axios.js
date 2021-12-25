const baseURL = "http://127.0.0.1"
const port = "5000";

const axios = require('axios');
const axiosInstance = axios.create({
    baseURL:`${baseURL}:${port}`,
    timeout: 2000,
    headers:{"Content-Type" : "application/x-www-form-urlencoded"}
});

export default axiosInstance;