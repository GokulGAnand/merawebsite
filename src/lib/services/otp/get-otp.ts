import { axiosInstance } from '@/lib/axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

export const getOtp = async (phone: number) => {
  return await axiosInstance.post(`lead/getotp`, {
    sellerMobileNumber: phone,
  });
};

export const useGetOtp = (phone: number) => {
  return useQuery({
    queryKey: ['otp'],
    queryFn: () => getOtp(phone),
    staleTime: Infinity,
    enabled: Boolean(phone),
  });
};
