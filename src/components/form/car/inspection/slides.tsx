import { purpose } from '@/data/purpose';
import SelectWithoutSearch from '../sell/select/SelectWithoutSearch';
import { EnterAddress } from '../slides/EnterAddress';

export type SlideIndex = 1 | 2 | 3;

export const slides = {
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
};
