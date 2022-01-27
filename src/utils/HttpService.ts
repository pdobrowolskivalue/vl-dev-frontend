import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from 'axios'

const httpOptions: AxiosRequestConfig = {
  baseURL: 'https://zgdemo.free.beeceptor.com/',
  responseType: 'json' as ResponseType,
}

const http: AxiosInstance = axios.create(httpOptions)
http.defaults.timeout = 2000

export default http
