'use client';
import Sidebar from '@/components/layout/Sidebar';
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

export default function HamburgerMenu() {
  const [show, setShow] = useState(false);
  function handleToggle() {
    setShow(!show);
  }
  return (
    <>
      <div onClick={handleToggle} className='cursor-pointer flex lg:hidden'>
        <IoMdMenu className='w-6 h-5' />
      </div>
      <Sidebar show={show} toggle={handleToggle} />
    </>
  );
}
