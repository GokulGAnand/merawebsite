import React, { SetStateAction, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ChevronDown from '~/svg/ChevronDownFilled.svg';

// Define the props for the custom input component
interface ExampleCustomInputProps {
  value: string;
  onClick?: () => void;
}

// Define the ref type
type Ref = HTMLInputElement;

const ExampleCustomInput = forwardRef<Ref, ExampleCustomInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <div className='relative'>
        <input
          value={value}
          placeholder={'Pick Date'}
          className='bg-textInputGrey border-0 p-4 rounded-lg w-full pr-10 placeholder:text-black'
          onClick={onClick}
          ref={ref}
        />
        <ChevronDown
          className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'
          width={24}
          height={24}
        />
      </div>
    );
  },
);

interface DateFieldProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<SetStateAction<Date | null>>;
  placeholder?: string;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
}

export const DateField = (props: DateFieldProps) => {
  const { setStartDate, startDate, showTimeSelect, showTimeSelectOnly } = props;

  return (
    <div className='w-full'>
      <DatePicker
        selected={new Date(startDate ?? new Date())}
        onChange={(date: Date | null) => setStartDate(date)}
        timeInputLabel='Time:'
        dateFormat='dd/MM/yyyy h:mm aa'
        showTimeSelect
        customInput={
          <ExampleCustomInput
            value={startDate?.toString() ?? ''}
            onClick={() => console.log('Date')}
          />
        }
      />
    </div>
  );
};
