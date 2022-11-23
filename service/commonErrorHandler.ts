import { AxiosError } from 'axios';

export const commonErrorHandler = (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        break;
        console.error('common 401 error', error.response);
      default:
        break;
    }
  }

  return Promise.reject(error);
};
