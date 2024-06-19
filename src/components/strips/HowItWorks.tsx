import React from 'react';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import ServiceCard from '../cards/ServiceCard';
import { sell } from '@/data/sell';
import { inspection } from '@/data/inspection';
import { howItWorksHeaderData } from '@/data/how-it-works';
import { services } from '@/data/partner';

interface props {
  isInspection?: boolean;
  isPartner?: boolean;
}

export default function HowItWorks(props: props) {
  const { isInspection, isPartner } = props;
  const data = isInspection ? inspection : isPartner ? services : sell;
  const headerData = isInspection
    ? howItWorksHeaderData.inspection
    : isPartner
      ? howItWorksHeaderData.partner
      : howItWorksHeaderData.sell;
  return (
    <>
      <HeaderWithBranding
        heading={headerData.heading}
        subHeading={headerData.subHeading}
      />
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-9 gap-5 my-12 w-[90%] lg:w-[88%] xl:w-[85%]'>
          {data.map((service, index) => {
            return (
              <ServiceCard
                key={service.heading}
                heading={service.heading}
                img={service.image}
                subHeading={service.subHeading}
                index={index + 1}
                isSecondary
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
