'use client';
import SectionBlock from '@/components/SectionBlock';
import ToyCarBanner from '~/images/MeraPartners/ToyCarBanner.png';
import ToyCarBannerMobile from '~/images/MeraPartners/ToyCarBannerMobile.png';
import ToyCarBannerTab from '~/images/MeraPartners/ToyCarBannerTab.png';
import DownloadPartners from './CallToAction';
import { downloadPartner } from '@/data/partner';
import SectionBannerImage from '../SectionBannerImage';
import { downloadButton } from '@/data/download-partner';

export default function DownloadMeraPartners() {
  return (
    <SectionBlock className='last:pb-0 mt-10 pb-12 lg:pb-44'>
      <div className='relative flex w-full overflow-hidden bg-gray-100  pt-10 pb-48 md:pt-8 px-[6%] md:px-[6.15%] lg:px-[7%] xl:px-[7.25%] md:py-96 lg:py-8 xl:py-16'>
        <SectionBannerImage
          Banner={ToyCarBanner}
          BannerMobile={ToyCarBannerMobile}
          BannerTab={ToyCarBannerTab}
        />
        <DownloadPartners
          header={downloadPartner.header}
          main_header={downloadPartner.main_header}
          content={downloadPartner.content}
          buttonData={downloadButton}
        />
      </div>
    </SectionBlock>
  );
}
