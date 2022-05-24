import axios, { AxiosResponse } from 'axios';
import { libsInterface } from 'src/interfaces';

const API = axios.create({ baseURL: `/` });
export const axiosGet = async (props: libsInterface.axiosInterface): Promise<AxiosResponse> => {
  const { url } = props;
  const axiosResult = await API.get(url)
    .then((res) => res)
    .catch((error) => error);
  return axiosResult;
};

export const axiosPost = (props: libsInterface.axiosPostInterface): any => {
  const { url, data } = props;
  return API.post(url, data)
    .then((result: object) => result)
    .catch((error) => error);
};
