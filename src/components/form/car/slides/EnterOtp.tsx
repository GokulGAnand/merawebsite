import { useFormStore } from '@/lib/store/store';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

export const EnterOtp = () => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(30);
  const { phone, decrementPage, incrementPage } = useFormStore();
  const countdownRunning = countdown > 0;

  function handleEdit() {
    decrementPage();
  }

  useEffect(() => {
    if (countdownRunning) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  function resendOtp() {
    if (countdown === 0) {
      setCountdown(30);
    }
  }

  function handleOtp(otpNumber: string) {
    setOtp(otpNumber);
    if (otpNumber.length === 4) {
      incrementPage();
    }
  }

  return (
    <div>
      <div className='text-stepsText text-lg leading-normal mb-4 mt-6 font-bold'>
        <div>Please enter the OTP sent to</div>
        <div>
          {phone}{' '}
          <span
            onClick={handleEdit}
            className='text-whiteButtonText text-base ml-3 font-semibold underline cursor-pointer'
          >
            EDIT
          </span>
        </div>
      </div>
      <div className='text-sm font-normal text-subHeadingColor mb-6'>
        Please enter the OTP (One Time Password) sent to your registered phone
        number to complete your verification
      </div>
      <div>
        <OtpInput
          value={otp}
          onChange={handleOtp}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            border: '1px solid #C5C5C5',
            borderRadius: '6px',
            width: 50,
            height: 50,
            display: 'flex',
            flexShrink: 0,
          }}
          containerStyle={{
            gap: '20px',
            display: 'flex',
          }}
        />
      </div>
      <div
        onClick={resendOtp}
        className={`${countdownRunning ? '' : 'cursor-pointer'} text-sm font-medium text-whiteButtonText mt-4`}
      >
        {countdownRunning ? `Resend OTP in ${countdown} seconds` : 'Resend OTP'}
      </div>
    </div>
  );
};
