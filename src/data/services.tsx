import ServiceOne from '~/svg/ServiceCardOne.svg';
import ServiceThree from '~/svg/ServiceCardThree.svg';
import ServiceTwo from '~/svg/ServiceCardTwo.svg';

export const services = [
  {
    heading: 'Get Your Car Checked',
    subHeading:
      'Get a free, instant car valuation. Then add info and take photos to create a profile of your vehicle. Then add info and',
    image: <ServiceOne className='rounded-tl-xl rounded-tr-xl' />,
  },
  {
    heading: 'Money Fast in Your',
    subHeading:
      'Get a free, instant car valuation. Then add info and take photos to create a profile of your vehicle. Then add info and',
    image: <ServiceThree className='rounded-tl-xl rounded-tr-xl' />,
  },
  {
    heading: 'Quick Sale and Smile',
    subHeading:
      'Get a free, instant car valuation. Then add info and take photos to create a profile of your vehicle. Then add info and',
    image: <ServiceTwo className='rounded-tl-xl rounded-tr-xl' />,
  },
];
