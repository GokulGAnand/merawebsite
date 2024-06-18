import { SetStateAction, useState } from 'react';
import { TextField } from '../../inputs/TextField';
import { FormButton } from '@/components/buttons/FormButton';
import { CheckBox } from '../../inputs/Checkbox';
import { getOtp } from '@/lib/services/otp/get-otp';
import { errorMessageParser } from '@/utils/error';

interface Props {
  heading: string;
  incrementPage: () => void;
  phone: string;
  setPhone: React.Dispatch<SetStateAction<string>>;
  getUpdates?: boolean;
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<SetStateAction<boolean>>;
  isDisabledBtn?: boolean;
}

export const EnterPhone = (props: Props) => {
  const {
    heading,
    getUpdates,
    isChecked,
    setIsChecked,
    incrementPage,
    phone,
    setPhone,
    isDisabledBtn,
  } = props;
  const [error, setError] = useState('');
  function handleChange(e: string) {
    setPhone(e);
    setError('');
  }

  async function handleClick() {
    let isError = false;
    if (/^\d{10}$/.test(phone)) {
      await getOtp(Number(phone))
        .then((res) => {
          isError = false;
          setError('');
        })
        .catch((err) => {
          isError = true;
          setError(errorMessageParser(err));
        });
      !isError && incrementPage();
    } else {
      setError('Please enter a valid 10-digit mobile number.');
    }
  }

  return (
    <div>
      <div className='text-stepsText text-lg leading-normal mb-4 mt-6 font-medium'>
        {heading}
      </div>
      <div className='grid grid-rows-1 lg:grid-cols-[3fr_2fr] gap-5 mt-9'>
        <TextField
          value={phone}
          onChange={handleChange}
          placeholder='Enter mobile no.'
        />
        <FormButton
          btnText='Get OTP'
          isDisabled={isDisabledBtn}
          onClick={handleClick}
        />
      </div>
      <div>
        {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
      </div>
      {getUpdates && (
        <div className='mt-16 flex justify-center'>
          <CheckBox
            isChecked={isChecked as boolean}
            setIsChecked={
              setIsChecked as React.Dispatch<SetStateAction<boolean>>
            }
            text='Send updates on my mobile'
          />
        </div>
      )}
    </div>
  );
};
