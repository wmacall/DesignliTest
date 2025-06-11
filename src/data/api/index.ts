import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const API_URL = 'https://finnhub.io/api/v1/';
const API_TOKEN = 'd14aup1r01qrqeat6rh0d14aup1r01qrqeat6rhg';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export const dispatchRequest = async (request: AxiosRequestConfig) => {
  try {
    axiosInstance.defaults.headers!.common['Content-Type'] = 'application/json';
    axiosInstance.defaults.headers!.common.Accept = 'application/json';
    if (!request.params) {
      request.params = {};
    }
    request.params.token = API_TOKEN;

    const resource = await axiosInstance.request(request);
    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};
