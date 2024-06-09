import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { SellCarObject, SellObject } from './types';
import { axiosInstance } from '@/lib/axios/axiosInstance';

export const postSellCar = (values: SellCarObject) => {
  return axiosInstance.post(`lead/sellCar`, values);
};

export const useSellCar = (): UseMutationResult<
  AxiosResponse<SellObject>,
  unknown,
  SellCarObject,
  unknown
> => {
  return useMutation({
    mutationFn: (values: SellCarObject) => postSellCar(values),
  });
};
