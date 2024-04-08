import Door from '~/svg/Door.svg';
import Paper from '~/svg/Paper.svg';
import Payment from '~/svg/Payment.svg';

const services = [
  {
    heading: 'Free rc transfer',
    subHeading: 'Lorem Ipsum is not simply random text',
    icon: <Paper width={32} heigth={32} />,
  },
  {
    heading: 'Door step car evaluation',
    subHeading: 'Lorem Ipsum is not simply random text',
    icon: <Door width={32} heigth={32} />,
  },
  {
    heading: 'Instant payment in a day',
    subHeading: 'Lorem Ipsum is not simply random text',
    icon: <Payment width={32} heigth={32} />,
  },
];

export const OurServices = () => {
  return (
    <div className=''>
      <div className='bg-stripBlueColor py-8  px-40 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-3  '>
        {services.map((service) => {
          return (
            <div
              key={service.heading}
              className='flex gap-4 align-middle place-items-center'
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
