import Button from '@/components/buttons/Button';
import { slideButton, SlideButtonType } from '@/data/home-buttons';
import { useRouter } from 'next/navigation';

import MeraVector from '~/svg/MeraCarsVector.svg';

type downloadLink = string;

interface Props {
  mainHeaderText: string;
  subHeaderText: string;
  description: string;
}

export default function SlideContents(Props: Props) {
  const { mainHeaderText, subHeaderText, description } = Props;
  const router = useRouter();
  const handleClick = (link: downloadLink) => {
    router.push(link);
  };
  return (
    <div className='w-full flex justify-center '>
      <div className='w-[90%] lg:w-[88%] xl:w-[85%] py-24 flex flex-col justify-center'>
        <div className='bg-bannerChipColor h-9 rounded-3xl flex align-middle justify-center place-items-center max-w-sm '>
          <ul className='list-none'>
            <li className='flex items-center text-md font-bold text-bannerChipText'>
              <span className='h-1 w-1 bg-bannerChipText rounded-full mr-2'></span>
              Accelerating India's Car Selling Journey
            </li>
          </ul>
        </div>
        <div className=' text-white flex flex-col gap-4 mt-6'>
          <div className='flex flex-col gap-2 '>
            <div className='text-4xl lg:text-5xl font-bold leading-10 flex flex-col  items-start  gap-1 '>
              <div>
                <div className=' mr-6 pb-1 flex justify-end'>
                  <MeraVector width={70} heigth={70} />
                </div>
                <div className='flex'>{mainHeaderText}</div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-4xl lg:text-5xl'>{subHeaderText}</h1>
          </div>
        </div>
        <div className=' max-w-xl text-white mt-8 text-lg'>
          <p>{description}</p>
        </div>
        <div className='flex flex-col md:flex-row w-2/3 md:w-full gap-3 mt-8'>
          {slideButton.map((buttonContent: SlideButtonType) => (
            <Button
              key={buttonContent.link}
              variant={buttonContent.variant}
              className='font-bold min-w-40 lg:min-w-48 min-h-16 justify-center rounded-xl'
              onClick={() => handleClick(buttonContent.link)}
            >
              {buttonContent.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
