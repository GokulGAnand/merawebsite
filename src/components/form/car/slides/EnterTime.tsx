import { NxtButton } from '../../components/NextButton';
import { useInspectionStore } from '@/lib/store/inspection-store';
import { DateField } from '../../inputs/DateField';
import { useState } from 'react';
import { format, isBefore } from 'date-fns';
import ErrorBox from '@/components/utils/ErrorBox';

export const EnterTime = () => {
  const { addChip, incrementPage, date, setDate } = useInspectionStore();
  const [error, setError] = useState<string | null>(null);
  function handleNext() {
    if (date && isBefore(date, new Date())) {
      setError('Selected date and time cannot be in the past.');
      return;
    }
    addChip({
      page: 3,
      chipValue: format(date ?? '', 'dd MMMM hh:mm'),
      value: 'Time',
      type: 'time',
    });
    incrementPage();
  }

  return (
    <div>
      <div className='text-stepsText text-lg leading-normal mb-8 mt-6 font-medium'>
        Pick a convenient <span className='font-bold'>Date and time</span> slot
        for you
      </div>
      <div className='flex flex-col gap-3'>
        <div>
          <DateField startDate={date} setStartDate={setDate} />
        </div>
        {error && <ErrorBox error={error} />}
      </div>
      <div className='my-8'>
        <NxtButton btnText='Next' onClick={handleNext} />
      </div>
    </div>
  );
};
