'use client';
import Link from 'next/link';
import React from 'react';
import Logo from '~/images/logoHeader.svg';
import { IoCloseOutline } from 'react-icons/io5';
import { headerLinks } from '@/data/header-links';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';

interface SidebarProps {
  show: boolean;
  toggle: () => void;
}

export default function Sidebar(props: SidebarProps) {
  const { show, toggle } = props;
  // const router = useRouter();
  const path = usePathname();

  function handleRoute(link: string) {
    // router.push(link);
    toggle();
  }

  return (
    <div
      className={`${
        show ? 'fixed' : 'hidden'
      } top-0 left-0 h-[100vh] w-64 z-0 bg-white flex flex-col justify-between  `}
    >
      <div>
        <div className='flex w-full justify-between py-5 px-2  shadow-md '>
          <div className='flex align-middle place-items-center '>
            <Link href='/'>
              <div className='cursor-pointer '>
                <Logo width={144} height={32} className='w-36 h-8' />
              </div>
            </Link>
          </div>
          <div
            className='flex align-middle place-items-center'
            onClick={toggle}
          >
            <IoCloseOutline fontSize={28} />
          </div>
        </div>
        <div>
          {/* {headerLinks.map((link) => {
            const isActive = link.route === path;

            return (
              <div
                key={link.label}
                className={` px-5 py-4 border border-solid border-b-mobileSidebarBorder border-x-0 border-t-0  text-${
                  isActive ? 'bannerChipText' : `headerLinkColor`
                }`}
                onClick={() => handleRoute(link.route)}
              >
                {link.label}
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
