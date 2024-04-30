import { about } from '@/data/about';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import Divider from '../utils/Divider';

export const AboutCard = () => {
  const Overview = about.filter((item) => item.id === 1);
  const mission = about.filter((item) => item.id === 2);
  const vision = about.filter((item) => item.id === 3);

 

  return (
    <div className='mt-20'>
      <div className=''>
        <p className='text-left text-16 font-bold leading-5 font-dm-sans font-medium text-aboutHeader'>
        • About the Company
        </p>
        <HeaderWithBranding
          isStart
          heading='Our Company Overview'
          subHeading=''
        />
        <div className='font-dm-sans text-base leading-[21px]'>{Overview[0].content}</div>
      </div>
      <div>
        <Divider/>
      </div>
      <div>
      <div className='grid grid-cols-2'>
        <div>
        <div className='text-aboutHeader font-dm-sans font-medium text-base leading-[23.44px]'>{mission[0].title}</div>
        <div className='font-dm-sans text-base leading-[21px]'>{mission[0].content}</div>
        </div>
        <div>
        <div className='text-aboutHeader font-dm-sans font-medium text-base leading-[23.44px]'>{vision[0].title}</div>
        <div className='font-dm-sans text-base leading-[21px]'>{vision[0].content}</div>
        </div>
      </div>
      </div>
    </div>
  );
};
