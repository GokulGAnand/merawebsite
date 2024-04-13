import Button from '@/components/buttons/Button';

import MeraVector from '~/svg/MeraCarsVector.svg';

export const FirstSlideContents = () => {
  return (
    <div className='w-full flex justify-center '>
      <div className='w-[90%] lg:w-[88%] xl:w-[85%] py-24 flex flex-col justify-center'>
        <div className='bg-bannerChipColor h-9 rounded-3xl flex align-middle justify-center place-items-center max-w-xs '>
          <ul className='list-none'>
            <li className='flex items-center text-md font-bold text-bannerChipText'>
              <span className='h-1 w-1 bg-bannerChipText rounded-full mr-2'></span>
              World of used cars in India
            </li>
          </ul>
        </div>
        <div className=' text-white flex flex-col gap-4 mt-6'>
          <div className='flex flex-col gap-2 '>
            <div className='text-4xl lg:text-5xl font-bold leading-10 flex flex-col  items-start  gap-1 '>
              <div>
                <div className=' mr-6 pb-1 flex justify-end'>
                  <MeraVector width={70} heigth={70} />
                </div>
                <div className='flex'>Selling Your Car?</div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-4xl lg:text-5xl'>We are Buying!</h1>
          </div>
        </div>
        <div className=' max-w-xl text-white mt-8 text-lg'>
          <p>
            Sell your car easily and get a top price with MeraCarsSell your car
            easily and get a top price with MeraCars Sell your car easily and
            get a top price with MeraCars
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-3 mt-8'>
          <Button
            variant='primary'
            className='font-bold min-w-40 lg:min-w-48 min-h-16 justify-center rounded-xl'
          >
            Sell Your Car
          </Button>
          <Button
            variant='light'
            className='font-bold min-w-40 lg:min-w-48 min-h-16 justify-center rounded-xl'
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
