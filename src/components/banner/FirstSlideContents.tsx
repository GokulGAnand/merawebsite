import Button from '@/components/buttons/Button';

import MeraVector from '~/svg/MeraCarsVector.svg';

export const FirstSlideContents = () => {
  return (
    <div>
      <div className='px-40 py-24'>
        <div className='bg-bannerChipColor h-9 rounded-3xl flex align-middle justify-center place-items-center max-w-xs '>
          <ul className='list-none'>
            <li className='flex items-center text-md font-bold text-bannerChipText'>
              <span className='h-1 w-1 bg-bannerChipText rounded-full mr-2'></span>
              World of used cars in India
            </li>
          </ul>
        </div>
        <div className=' text-white flex flex-col gap-4 mt-12'>
          <div className='flex text-5xl align-middle items-center gap-2 '>
            <h1 className=' text-5xl'>Selling Your </h1>
            <span className='-mt-3'>
              <div className='px-2'>
                <MeraVector width={70} heigth={70} />
              </div>
              <h1 className='text-5xl'> {'  '}Car?</h1>
            </span>{' '}
          </div>
          <div>
            <h1 className=' text-5xl'>We are Buying!</h1>
          </div>
        </div>
        <div className=' max-w-xl text-white mt-8 text-lg'>
          <p>
            Sell your car easily and get a top price with MeraCarsSell your car
            easily and get a top price with MeraCars Sell your car easily and
            get a top price with MeraCars
          </p>
        </div>
        <div className='flex gap-3 mt-8'>
          <Button
            variant='primary'
            className='font-bold min-w-48 min-h-16 justify-center rounded-xl'
          >
            Sell Your Car
          </Button>
          <Button
            variant='light'
            className='font-bold min-w-48 min-h-16 justify-center rounded-xl'
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
