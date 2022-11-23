import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { commonErrorHandler } from './commonErrorHandler';

const axiosConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
};

export const request: AxiosInstance = Axios.create(axiosConfig);

type RequestProps = {
  url: string;
  params: { [key: string]: string };
};

export const get = ({ url, params }: RequestProps) => request.get(url, { params });

request.interceptors.response.use((response) => response, commonErrorHandler);
