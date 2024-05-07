import { headerLinks } from '@/data/header-links';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import Logo from '~/images/logoHeader.svg';
import { SidebarLinks } from './SidebarLinks';
import { contactNum } from '@/data/contacts';

export default function HamburgerMenu() {
  return (
    <div className='drawer lg:hidden flex'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Icon  */}
        <label htmlFor='my-drawer' className='cursor-pointer flex lg:hidden'>
          <IoMdMenu className='w-6 h-5' />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-0 min-h-full w-64 min-w-fit z-0 bg-white flex flex-col justify-between'>
          <div>
            <div className='flex w-full justify-between py-5 px-2  shadow-md '>
              <div className='flex align-middle place-items-center '>
                <Link href='/'>
                  <div className='cursor-pointer '>
                    <Logo width={144} height={32} className='w-36 h-8' />
                  </div>
                </Link>
              </div>
              <div className='flex align-middle place-items-center'>
                <label htmlFor='my-drawer'>
                  <IoCloseOutline fontSize={28} />
                </label>
              </div>
            </div>
            <SidebarLinks />
          </div>
          <div className='bg-bannerChipColor h-[11vh] flex text-center font-bold justify-center align-middle place-items-center '>
            Call us at {contactNum}
          </div>
        </ul>
      </div>
    </div>
  );
}
