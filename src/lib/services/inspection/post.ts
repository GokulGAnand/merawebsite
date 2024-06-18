import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/lib/axios/axiosInstance';
import { InspectionCarObj, InspectionResponse } from './types';

export const postInspectionCar = (values: InspectionCarObj) => {
  return axiosInstance.post(`lead/inspectionCar`, values);
};

export const useInspectionCar = (): UseMutationResult<
  AxiosResponse<InspectionResponse>,
  unknown,
  InspectionCarObj,
  unknown
> => {
  return useMutation({
    mutationFn: (values: InspectionCarObj) => postInspectionCar(values),
  });
};
