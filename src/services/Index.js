import axios from "axios";

const baseUrl = 'https://httpbin.org';

const getBaseUrl = () => baseUrl;

const getDataApi = async (data) =>
    await axios.post(`${getBaseUrl()}/post`, data)


export {
    getBaseUrl,
    getDataApi
}

