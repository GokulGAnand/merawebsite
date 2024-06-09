import { ownership } from '@/data/ownership';
import SelectBrand from './select/SelectBrand';
import SelectModel from './select/SelectModel';
import SelectRto from './select/SelectRto';
import SelectVariant from './select/SelectVariant';
import SelectWithoutSearch from './select/SelectWithoutSearch';
import SelectYear from './select/SelectYear';
import { kilometers } from '@/data/kilometers';
import { whenToSell } from '@/data/whenToSell';
import { EnterPhone } from '../slides/EnterPhone';
import { EnterOtp } from '../slides/EnterOtp';
import { SuccessSlide } from '../slides/SuccessSlide';
import { useFormStore } from '@/lib/store/store';
import { useSlideActions } from './hooks/useSlideActions';

export type SlideIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export const useGetSlides = () => {
  const { phone, setPhone, incrementPage, decrementPage, clearAll } =
    useFormStore();
  const { handleOtpVerifySuccess } = useSlideActions();

  return {
    1: <SelectBrand />,
    2: <SelectRto />,
    3: <SelectYear />,
    4: <SelectModel />,
    5: <SelectVariant />,
    6: (
      <SelectWithoutSearch
        btnType='ownership'
        data={ownership}
        valueKey='value'
        heading='Select the ownership history of your car'
        page={6}
      />
    ),
    7: (
      <SelectWithoutSearch
        btnType='kms'
        data={kilometers}
        valueKey='chipValue'
        heading='Select the Kilometers driven of your car'
        page={7}
        gridCols={3}
      />
    ),
    8: (
      <SelectWithoutSearch
        btnType='when'
        data={whenToSell}
        heading='When do you want to sell your car?'
        page={8}
      />
    ),
    9: (
      <EnterPhone
        heading='Enter your mobile number to see your car valuation'
        incrementPage={incrementPage}
        phone={phone}
        setPhone={setPhone}
      />
    ),
    10: (
      <EnterOtp
        clearAll={clearAll}
        decrementPage={decrementPage}
        incrementPage={incrementPage}
        phone={phone}
        handleVerifySuccess={handleOtpVerifySuccess}
      />
    ),
    11: (
      <SuccessSlide
        successText='Thank you for submitting your details. You can expect a call from our 
      customer care team within the next 24 hours.'
      />
    ),
  };
};
