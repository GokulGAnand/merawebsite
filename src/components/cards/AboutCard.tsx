import { about } from '@/data/about';
import HeaderWithBranding from '../headers/HeaderWithBranding';

export const AboutCard = () => {
  const Overview = about.filter((item) => item.id === 1);
  const mission = about.filter((item) => item.id === 2);
  const vision = about.filter((item) => item.id === 3);

  return (
    <div className=''>
      <div className=''>
        <p className='text-left text-16 text-blue-900 font-bold leading-5'>
          About the company
        </p>
        <HeaderWithBranding
          isStart
          heading='Our Company Overview'
          subHeading=''
        />
        <div className=''>{Overview[0].content}</div>
      </div>
      <div>
        <div className='flex'>
          <div>{mission[0].title}</div>
          <div>{mission[0].content}</div>
        </div>
        <div>
          <div>{vision[0].title}</div>
          <div>{vision[0].content}</div>
        </div>
      </div>
    </div>
  );
};
