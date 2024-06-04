import DataOpts from '../options/DataOpts';

interface Props {
  heading: string;
  data: { label: string; value: string }[];
  page: number;
  btnType: string;
  gridCols?: number;
  valueKey?: string;
  isSell?: boolean;
  isInspection?: boolean;
}

export default function SelectWithoutSearch(props: Props) {
  const {
    heading,
    btnType,
    data,
    page,
    gridCols,
    valueKey,
    isSell,
    isInspection,
  } = props;
  return (
    <>
      <div className='text-stepsText text-sm lg:text-lg leading-normal mt-3 lg:mb-4 lg:mt-6 font-medium'>
        {heading}
      </div>
      <div className='mt-14 flex flex-col gap-4'>
        <DataOpts
          btnType={btnType}
          data={data}
          page={page}
          gridCols={gridCols}
          valueKey={valueKey}
          isSell={Boolean(isSell)}
          isInspection={Boolean(isInspection)}
        />
      </div>
    </>
  );
}
