import React from 'react';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import ServiceCard from '../cards/ServiceCard';
import { StaticImageData } from 'next/image';

interface HeaderData {
  heading: string;
  subHeading: string;
}
interface ServiceData {
  heading: string;
  subHeading: string;
  image: StaticImageData;
}
interface props {
  data?: ServiceData[];
  headerData?: HeaderData;
}

export default function HowItWorks(props: props) {
  const { data = [], headerData = { heading: '', subHeading: '' } } = props;
  return (
    <>
      <HeaderWithBranding
        heading={headerData.heading}
        subHeading={headerData.subHeading}
      />
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-9 gap-5 my-12 w-[90%] lg:w-[88%] xl:w-[85%] justify-items-center'>
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
