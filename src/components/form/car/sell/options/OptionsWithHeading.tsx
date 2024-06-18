import ButtonOption from '../../../components/ButtonOption';
import FormSideHeading from '../../../components/FormSideHeading';

interface Props {
  heading: string;
  options: { label: string; value: string }[];
  optionType: string;
}

export const OptionsWithHeading = (props: Props) => {
  const { options, heading, optionType } = props;

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <FormSideHeading text={heading} />
      </div>
      <div className={`grid justify-between gap-5 grid-cols-2 lg:grid-cols-3`}>
        {options?.map((option: { value: string; label: string }) => {
          return (
            <ButtonOption
              key={option.label}
              value={option.value}
              chipValue={option.label}
              text={option.label}
              type={optionType}
              page={5}
              stopNavigation
            />
          );
        })}
      </div>
    </div>
  );
};
