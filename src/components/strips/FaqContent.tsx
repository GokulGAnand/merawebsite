import Faq from '@/components/accordions/Faq';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';

export default function FaqContent() {
  console.log('Hi');
  return (
    <div className='flex flex-col justify-center w-[90%] lg:w-[88%] xl:w-[85%] gap-2 '>
      <HeaderWithBranding
        isStart
        heading='Frequently Asked Questions'
        subHeading=' Find out how we make car selling clear-cut and trustworthy, just for you.'
      />
      <Faq />
    </div>
  );
}
