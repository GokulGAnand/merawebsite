interface Props {
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
}

export const AddressInput = (props: Props) => {
  const { value, onChange, placeholder } = props;
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  return (
    <input
      value={value}
      onChange={handleChange}
      className='w-full p-4 bg-textInputGrey placeholder-textInputPlaceholderGrey border-0 self-stretch items-start rounded-md'
      placeholder={placeholder}
    />
  );
};
