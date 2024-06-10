import { purpose } from '@/data/purpose';
import SelectWithoutSearch from '../sell/select/SelectWithoutSearch';
import { EnterAddress } from '../slides/EnterAddress';
import { EnterTime } from '../slides/EnterTime';
import { EnterPhone } from '../slides/EnterPhone';
import { EnterOtp } from '../slides/EnterOtp';
import { useInspectionStore } from '@/lib/store/inspection-store';
import OrderSummary from '../slides/OrderSummary';
import { order } from '@/data/order';
import { SuccessSlide } from '../slides/SuccessSlide';
import { useSlideActions } from './hooks/useSlideActions';

export type SlideIndex = 1 | 2 | 3;

export const useGetSlides = () => {
  const {
    incrementPage,
    phone,
    setPhone,
    isChecked,
    setIsChecked,
    decrementPage,
  } = useInspectionStore();

  const { handleInspectionOtp, apiError, handlePaymentOrder } =
    useSlideActions();

  function handlePay() {
    handlePaymentOrder();
  }

  return {
    1: (
      <SelectWithoutSearch
        btnType='purpose'
        data={purpose}
        heading='Choose the Purpose of Inspection'
        page={1}
        isInspection
      />
    ),
    2: <EnterAddress />,
    3: <EnterTime />,
    4: (
      <EnterPhone
        heading='Enter your mobile number to see your car Inspection'
        incrementPage={incrementPage}
        phone={phone}
        setPhone={setPhone}
        getUpdates
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    ),
    5: (
      <EnterOtp
        decrementPage={decrementPage}
        incrementPage={incrementPage}
        phone={phone}
        clearAll={() => console.log('')}
        isInspection
        handleInspectionOtp={handleInspectionOtp}
        apiError={apiError as string}
      />
    ),
    6: <OrderSummary order={order} handleSubmit={handlePay} />,
    7: (
      <SuccessSlide
        successText='Thank you for submitting your details. You can expect a call from our 
    customer care team within the next 24 hours.'
      />
    ),
  };
};
