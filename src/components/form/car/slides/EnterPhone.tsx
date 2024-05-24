import { useState } from 'react';
import { TextField } from '../../inputs/TextField';
import { FormButton } from '@/components/buttons/FormButton';
import { useFormStore } from '@/lib/store/store';

export const EnterPhone = () => {
  const [error, setError] = useState('');
  const { incrementPage, phone, setPhone } = useFormStore();
  function handleChange(e: string) {
    setPhone(e);
    setError('');
  }

  function handleClick() {
    if (/^\d{10}$/.test(phone)) {
      incrementPage();
    } else {
      setError('Please enter a valid 10-digit mobile number.');
    }
  }
  return (
    <div>
      <div className='text-stepsText text-lg leading-normal mb-4 mt-6 font-medium'>
        Enter your mobile number to see your car valuation
      </div>
      <div className='grid grid-cols-[3fr_2fr] gap-5 mt-9'>
        <TextField
          value={phone}
          onChange={handleChange}
          placeholder='Enter mobile no.'
        />
        <FormButton btnText='Get OTP' onClick={handleClick} />
      </div>
      <div>
        {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
      </div>
    </div>
  );
};
