import React from 'react';
import clsx from 'clsx';

interface Props {
  value: string;
  onChange: (value: string) => void;
  label: string;
  isTextArea?: boolean;
  required?: boolean;
}

export const ContactInput: React.FC<Props> = ({
  value,
  onChange,
  label,
  isTextArea,
  required,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor={label} className='text-stepsText font-medium text-sm'>
        {label}
      </label>

      <div className={clsx(isTextArea ? '' : 'pb-8')}>
        {isTextArea ? (
          <textarea
            id='message'
            className='w-full p-2 border-contactFormBackgroundColor bg-contactFormBackgroundColor rounded-lg h-40'
            value={value}
            onChange={handleChange}
            required={required}
          ></textarea>
        ) : (
          <input
            value={value}
            onChange={handleChange}
            required={required}
            className={clsx(
              'w-full p-2 border-contactFormBackgroundColor bg-contactFormBackgroundColor rounded-lg self-stretch',
              isTextArea ? 'h-40' : 'py-4',
            )}
          />
        )}
      </div>
    </>
  );
};
