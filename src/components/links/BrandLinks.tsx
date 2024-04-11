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
        Mera Cars is the most trusted way of buying and selling used cars.
        Choose from over 5000 fully inspected second-hand car models. Select
        online and book a test drive at your home or at a Meracars Car Hub near
        you.{' '}
      </div>
      <div className='hidden lg:flex'>
        <Socials />
      </div>
    </>
  );
}
