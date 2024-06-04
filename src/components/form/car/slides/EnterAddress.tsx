import { useState } from 'react';
import { AddressInput } from '../../inputs/AddressInput';
import { NxtButton } from '../../components/NextButton';
import { useInspectionStore } from '@/lib/store/inspection-store';

export const EnterAddress = () => {
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [district, setDistrict] = useState('');
  const [pin, setPin] = useState('');
  const { addChip, incrementPage } = useInspectionStore();

  function handleNext() {
    addChip({
      page: 2,
      chipValue: 'Address',
      value: { addressOne, addressTwo, district, pin },
      type: 'address',
    });
    incrementPage();
  }

  return (
    <div>
      <div className='text-stepsText text-lg leading-normal mb-8 mt-6 font-medium'>
        Enter your <span className='font-bold'>Address</span>
      </div>
      <div className='flex flex-col gap-4'>
        <AddressInput
          value={addressOne}
          onChange={(e) => setAddressOne(e)}
          placeholder='Address Line 1'
        />
        <AddressInput
          value={addressTwo}
          onChange={(e) => setAddressTwo(e)}
          placeholder='Address Line 2'
        />
        <div className='flex lg:flex-row flex-col gap-4'>
          <AddressInput
            value={district}
            onChange={(e) => setDistrict(e)}
            placeholder='District'
          />
          <AddressInput
            value={pin}
            onChange={(e) => setPin(e)}
            placeholder='Pin'
          />
        </div>
      </div>
      <div className='my-8'>
        <NxtButton btnText='Next' onClick={handleNext} />
      </div>
    </div>
  );
};
