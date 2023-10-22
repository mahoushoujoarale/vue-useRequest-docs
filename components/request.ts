import axios from 'axios';

export interface IParams {
  key: string;
}

export interface IResult {
  adcode: string[];
  city: string[];
  info: string;
  infocode: string;
  province: string[];
  rectangle: string[];
  status: string;
};

const url = 'https://restapi.amap.com/v3/ip';
export const correctKey = 'e641661b0dfbf7ffa23a2110d44f38de';

export const request = async (signal: AbortSignal, params: IParams) => {
  const res = await axios.get<IResult>(url, {
    signal,
    params,
  });
  const data = res.data;

  if (data.status !== '1') {
    throw new Error(data.info);
  }
  return data;
};
