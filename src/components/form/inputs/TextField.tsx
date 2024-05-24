interface TextFieldProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export const TextField = (props: TextFieldProps) => {
  const { onChange, value, error, placeholder, type } = props;
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  return (
    <div className='flex flex-col w-full'>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='rounded-md border border-solid border-formInputBorder py-3 w-full'
      />
      {error && <span className='text-red-500 text-sm mt-1'>{error}</span>}
    </div>
  );
};
