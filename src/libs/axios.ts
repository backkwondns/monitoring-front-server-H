import axios, { AxiosResponse } from 'axios';
import { libsInterface } from 'src/interfaces';

export const axiosGet = async (props: libsInterface.axiosInterface): Promise<AxiosResponse> => {
  const { url } = props;
  const axiosResult = await axios
    .get(url)
    .then((res) => res)
    .catch((error) => error);
  return axiosResult;
};

export const axiosPost = (props: libsInterface.axiosPostInterface): object => {
  const { url, data } = props;
  return axios.post(url, data).then((result: object) => result);
};
