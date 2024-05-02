import React from 'react';
import FooterLogo from '~/svg/MeraCarsWhiteLogo.svg';
import Socials from '@/components/links/Socials';

export default function BrandLinks() {
  return (
    <>
      <div>
        <FooterLogo width={142} height={48} />
      </div>
      <div className='text-sm font-normal leading-8'>
        MeraCars is your most trustable choice for selling used cars. We make
        the selling process smooth, fast and straightforward. Every car is
        carefully inspected to guarantee that you receive the highest possible
        price. Just give your car details on our website, and we will take care
        of everything else.{' '}
      </div>
      <div className='hidden lg:flex'>
        <Socials />
      </div>
    </>
  );
}
