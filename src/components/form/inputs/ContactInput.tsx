import clsx from 'clsx';

interface Props {
  value: string;
  onChange: (e: string) => void;
  label: string;
  isMessage?: boolean;
}

export const ContactInput = (props: Props) => {
  const { value, onChange, label, isMessage } = props;
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  return (
    <>
      <label htmlFor={label} className='text-stepsText font-medium text-sm'>
        {label}
      </label>

      <div className={clsx(isMessage ? '' : 'pb-8')}>
        <input
          value={value}
          onChange={handleChange}
          className={clsx(
            'w-full p-2 border-contactFormBackgroundColor bg-contactFormBackgroundColor rounded-lg',
            isMessage ? 'h-40' : 'pt-4',
          )}
        />
      </div>
    </>
  );
};
