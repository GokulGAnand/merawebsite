import Door from '~/svg/Door.svg';
import Paper from '~/svg/Paper.svg';
import Payment from '~/svg/Payment.svg';

const services = [
  {
    heading: 'Free RC Transfer',
    subHeading:
      'Enjoy hassle-free paperwork with our Free RC Transfer service.',
    icon: <Paper width={32} heigth={32} />,
  },
  {
    heading: 'Doorstep car evaluation',
    subHeading:
      'Our experts come to your location, providing a thorough assessment of your car’s condition.',
    icon: <Door width={32} heigth={32} />,
  },
  {
    heading: 'Instant Payment in a Day',
    subHeading:
      'Once your car sale is finalised, expect the payment within a day.',
    icon: <Payment width={32} heigth={32} />,
  },
];

export const OurServices = () => {
  return (
    <div className='w-full flex justify-center bg-stripBlueColor'>
      <div className=' py-8 w-[90%] lg:w-[88%] xl:w-[85%] justify-center  grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-3  '>
        {services.map((service) => {
          return (
            <div
              key={service.heading}
              className='flex gap-4 align-middle place-items-center text-serviceText'
            >
              <div className='flex align-middle '>
                <div className='p-2.5 bg-[#CCE5FD] rounded-xl'>
                  {service.icon}
                </div>
              </div>
              <div className=''>
                <div className='font-bold line text-md'>{service.heading}</div>
                <div className='text-sm text-subHeadingColor'>
                  {service.subHeading}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
