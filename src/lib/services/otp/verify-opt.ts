import { axiosInstance } from '@/lib/axios/axiosInstance';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { RootObject } from './types';

interface OtpProps {
  phone: number;
  opt: number;
}

export const verifyOtp = async (phone: number, otp: number) => {
  return await axiosInstance.post(`lead/verifyOtp`, {
    sellerMobileNumber: phone,
    otp,
  });
};

export const useVerifyOtp = (): UseMutationResult<
  AxiosResponse<RootObject>,
  unknown,
  OtpProps,
  unknown
> => {
  return useMutation({
    mutationFn: (values: OtpProps) => verifyOtp(values.phone, values.opt),
  });
};
