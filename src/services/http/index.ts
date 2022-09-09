import Axios, { AxiosInstance } from 'axios';

export const http: AxiosInstance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export const catchHandler = (error: any) => {
  if (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }

  console.log(error);
};
