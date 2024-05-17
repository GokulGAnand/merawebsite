import { about, mission } from '@/data/about';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import Divider from '../utils/Divider';

export const AboutCard = () => {
  const Overview = about;

  return (
    <div className='mt-24 lg:mb-36 mr:44 lg:w-1/2'>
      <div>
        <p className='text-left text-base font-bold text-bannerChipText'>
          • About the Company
        </p>
        <HeaderWithBranding
          isStart
          heading='Our Company Overview'
          subHeading=''
        />
        <div className='text-sm leading-[21px] text-headerLinkColor'>
          {Overview.content}
        </div>
      </div>
      <div className='flex pr-2'>
        <Divider className=' flex-grow border-t border-aboutDividerColor' />
      </div>
      <div className='flex'>
        <div className='flex flex-col md:flex-row md:gap-x-8 gap-y-4'>
          {mission.map((item) => {
            return (
              <div key={item.id}>
                <div className='text-bannerChipText text-lg font-medium'>
                  {item.title}
                </div>
                <div className='text-sm text-headerLinkColor'>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
