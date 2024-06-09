import { useSellCar } from '@/lib/services/sell/post';
import { useFormStore } from '@/lib/store/store';

export const useSlideActions = () => {
  const sell = useSellCar();
  const { chips, selections, phone } = useFormStore();
  const valueCollection = [...chips, ...selections];

  const carData = valueCollection.reduce((acc, item) => {
    acc[item.type] = item.value;
    return acc;
  }, {});

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
