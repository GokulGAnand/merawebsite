import BrandLinks from '@/components/links/BrandLinks';
import ShowroomLinks from '@/components/links/ShowroomLinks';
import UsefulLinks from '@/components/links/UsefulLinks';
import Copyright from '@/components/utils/Copyright';
import Divider from '@/components/utils/Divider';
import React from 'react';

function Footer() {
  return (
    <div className='bg-footerColor text-white w-full '>
      <div className=' flex justify-between px-40 pt-20 min-w-full'>
        <div className='w-1/3 flex flex-col gap-5 '>
          <BrandLinks />
        </div>
        <div className='w-1/3 flex flex-col align-middle items-center'>
          <UsefulLinks />
        </div>
        <div className='w-1/3 flex flex-col align-middle items-end'>
          <ShowroomLinks />
        </div>
      </div>
      <div className='pt-12'>
        <Divider />
      </div>
      <div className='py-6 '>
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
