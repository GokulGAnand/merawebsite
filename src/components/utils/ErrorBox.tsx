import React from 'react';
import { errorMessageParser } from '@/utils/error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ErrorBox({ error }: { error: any }) {
  const errorMessage = errorMessageParser(error);

  return (
    <>
      <div className='text-red-500'>{errorMessage}</div>
    </>
  );
}

export default ErrorBox;
