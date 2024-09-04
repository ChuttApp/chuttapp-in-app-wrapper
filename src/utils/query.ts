/* eslint-disable prefer-promise-reject-errors */
import * as axios from 'axios';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const routePath = `http://localhost:3000`;

export const _get = <ResponseT = any>(
  route: string,
  params?: any,
  config?: axios.AxiosRequestConfig<any>,
): Promise<ResponseT> => {
  return new Promise((resolve, reject) => {
    axios.default
      .get(routePath + route, { ...(config || {}), params, })
      .then((response: any) => resolve(response?.data || null))
      .catch((error: any) => {
        if (error.response) {
          reject(error.response.data);
        }
        reject({
          message: 'An unexpected error occured',
          code: 'CLI500',
          url: routePath + route,
        });
      });
  });
};

export const _post = async <ResponseT = any>(
  route: string,
  option?: any,
  config?: axios.AxiosRequestConfig<any>,
): Promise<ResponseT> => {
  return new Promise((resolve, reject) => {
    axios.default
      .post(routePath + route, option, config)
      .then((response: any) => resolve(response?.data))
      .catch((error: any) => {
        if (error.response) {
          reject(error.response.data);
        }
        reject({
          message: 'An unexpected error occurred',
          code: 'CLI500',
        });
      });
  });
};

export const _put = async <ResponseT = any>(
  route: string,
  option?: any,
  config?: axios.AxiosRequestConfig<any>,
): Promise<ResponseT> => {
  return new Promise((resolve, reject) => {
    axios.default
      .put(routePath + route, option, config)
      .then((response: any) => resolve(response?.data))
      .catch((error: any) => {
        if (error.response) {
          reject(error.response.data);
        }
        reject({
          message: 'An unexpected error occurred',
          code: 'CLI500',
          url: routePath + route,
        });
      });
  });
};

export const httpPost = <T = any>(
  url: string,
  data?: any,
  config?: axios.AxiosRequestConfig<any>,
): Promise<axios.AxiosResponse<any, T>> => {
  return new Promise((resolve, reject) => {
    axios.default
      .post(url, data, config)
      .then((response: any) => resolve(response))
      .catch((error: any) => {
        if (error.response) {
          reject(error.response.data);
        }
        reject({
          message: 'An unexpected error occured',
          code: 'CLI500',
        });
      });
  });
};

export { useQuery, useMutation, useQueryClient, QueryClientProvider, QueryClient };
