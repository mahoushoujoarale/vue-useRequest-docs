import axios from 'axios';

export type IResult = string;

const url = 'https://restapi.amap.com/v3/ip?key=e641661b0dfbf7ffa23a2110d44f38de&city=110000';
export const request = async (signal: AbortSignal, isWrong?: boolean) => {
  if (isWrong) {
    await new Promise((resolve, reject) => setTimeout(() => {
      reject(new Error('error'));
    }, 1000));
  }
  const res = await axios.get<IResult>(url, {
    signal,
  });
  return res.data;
};
