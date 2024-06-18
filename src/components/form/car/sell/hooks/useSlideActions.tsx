import { useSellCar } from '@/lib/services/sell/post';
import { useFormStore } from '@/lib/store/store';

const chipValue = ['make', 'model', 'variant'];

export const deriveCarData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  collection: any[],
  chipValues?: string[],
) => {
  return collection.reduce((acc, item) => {
    acc[item.type] = chipValues?.includes(item.type)
      ? item.chipValue
      : item.value;
    return acc;
  }, {});
};

export const useSlideActions = () => {
  // OTP VERIFY SUCCESS - SELL CAR
  const sell = useSellCar();
  const { chips, selections, phone } = useFormStore();
  const valueCollection = [...chips, ...selections];

  const carData = deriveCarData(valueCollection, chipValue);

  const handleOtpVerifySuccess = () => {
    sell.mutate({
      fuelType: carData?.fuel,
      make: carData?.make,
      model: carData?.model,
      monthAndYearOfManufacture: carData?.year,
      odometerReading: carData?.kms,
      ownershipNumber: carData?.ownership,
      proposeOfSell: carData?.when,
      rto: carData?.rto,
      sellerMobileNumber: phone,
      transmission: carData?.transmission,
      variant: carData?.variant,
    });
  };

  return {
    handleOtpVerifySuccess,
  };
};
