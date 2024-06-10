import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/lib/axios/axiosInstance';
import { OrderObject, PaymentValues } from './types';

export const postPaymentOrder = (values: PaymentValues) => {
  return axiosInstance.post(`lead/createOrder`, values);
};

export const usePaymentOrder = (): UseMutationResult<
  AxiosResponse<OrderObject>,
  unknown,
  PaymentValues,
  unknown
> => {
  return useMutation({
    mutationFn: (values: PaymentValues) => postPaymentOrder(values),
  });
};
