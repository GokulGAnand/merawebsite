import ErrorBox from '@/components/utils/ErrorBox';
import { getOtp } from '@/lib/services/otp/get-otp';
import { useVerifyOtp, verifyOtp } from '@/lib/services/otp/verify-opt';
import { errorMessageParser } from '@/utils/error';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

interface Props {
  phone: string;
  decrementPage: () => void;
  incrementPage: () => void;
  clearAll: () => void;
  handleVerifySuccess?: () => void;
  isInspection?: boolean;
  handleInspectionOtp?: (otp: number) => void;
  apiError?: string;
}

export const EnterOtp = (props: Props) => {
  const {
    clearAll,
    decrementPage,
    incrementPage,
    phone,
    handleVerifySuccess,
    isInspection,
    handleInspectionOtp,
    apiError,
  } = props;
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState<string | null>(null);
  const countdownRunning = countdown > 0;

  const verify = useVerifyOtp();

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

  async function resendOtp() {
    let error = false;
    if (countdown === 0) {
      await getOtp(Number(phone))
        .then(() => {
          setError(null);
        })
        .catch((err) => {
          setError(errorMessageParser(err));
          error = true;
        });
      !error && setCountdown(30);
    }
  }

  function handleOtp(otpNumber: string) {
    setOtp(otpNumber);
    if (otpNumber.length === 4) {
      if (isInspection) {
        handleInspectionOtp && handleInspectionOtp(Number(otpNumber));
      } else {
        verify.mutate(
          {
            opt: Number(otpNumber),
            phone: Number(phone),
          },
          {
            onSuccess: () => {
              handleVerifySuccess && handleVerifySuccess();
              incrementPage();
              clearAll();
              setError(null);
            },
            onError: (err) => {
              setError(errorMessageParser(err));
            },
          },
        );
      }
    }
  }

  const errorMsg = error || apiError;

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
      {errorMsg && <ErrorBox error={errorMsg} />}
    </div>
  );
};
