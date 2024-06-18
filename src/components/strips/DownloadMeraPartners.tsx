'use client';
import SectionBlock from '@/components/SectionBlock';
import ToyCarBanner from '~/images/MeraPartners/ToyCarBanner.png';
import ToyCarBannerMobile from '~/images/MeraPartners/ToyCarBannerMobile.png';
import ToyCarBannerTab from '~/images/MeraPartners/ToyCarBannerTab.png';
import NextImage from '@/components/NextImage';
import DownloadPartners from './DownloadPartners';

export default function DownloadMeraPartners() {
  return (
    <SectionBlock className='last:pb-0 mt-10'>
      <div className='relative flex w-full overflow-hidden bg-gray-100  pt-10 pb-48 md:pt-8 px-[6%] md:px-[6.15%] lg:px-[7%] xl:px-[7.25%] md:py-96 lg:py-8 xl:py-16'>
        <NextImage
          src={ToyCarBanner}
          layout='fill'
          alt='car'
          className='hidden lg:flex'
        />
        <NextImage
          src={ToyCarBannerMobile}
          layout='fill'
          alt='background pattern'
          className='flex lg:hidden'
        />
        <NextImage
          src={ToyCarBannerTab}
          layout='fill'
          alt='background pattern'
          className='hidden md:flex lg:hidden'
        />
        <DownloadPartners />
      </div>
    </SectionBlock>
  );
}
