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

export type SlideIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export const slides = {
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
  9: <EnterPhone />,
  10: <EnterOtp />,
  11: (
    <SuccessSlide
      successText='Thank you for submitting your details. You can expect a call from our 
    customer care team within the next 24 hours.'
    />
  ),
};
