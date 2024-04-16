import BrandLinks from '@/components/links/BrandLinks';
import ShowroomLinks from '@/components/links/ShowroomLinks';
import UsefulLinks from '@/components/links/UsefulLinks';
import Copyright from '@/components/utils/Copyright';
import Divider from '@/components/utils/Divider';
import React from 'react';

function Footer() {
  return (
    <div className={'bg-footerColor text-white w-full flex justify-center '}>
      <div className='w-[90%] lg:w-[88%] xl:w-[85%]'>
        <div className='grid gap-1 lg:gap-9 lg:grid-flow-col lg:grid-cols-3 justify-between pt-20 min-w-full'>
          <div className=' flex flex-col gap-5 '>
            <BrandLinks />
          </div>
          <div className=' flex flex-col align-middle items-start lg:items-center'>
            <UsefulLinks />
          </div>
          <div className='flex flex-col align-start items-start lg:align-center lg:items-end'>
            <ShowroomLinks />
          </div>
        </div>
        <div className='lg:pt-12 flex justify-center w-full'>
          <Divider />
        </div>
        <div className='lg:py-6  '>
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default Footer;
