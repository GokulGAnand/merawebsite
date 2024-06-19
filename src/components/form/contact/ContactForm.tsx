'use client';

import React from 'react';
import { useContactStore } from '@/lib/store/contact-store';
import Socials from '@/components/links/Socials';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import Button from '@/components/buttons/Button';
import { GrFormNextLink } from 'react-icons/gr';
import { ContactInput } from '../inputs/ContactInput';

const ContactForm: React.FC = () => {
  const { name, email, message, setName, setEmail, setMessage, resetForm } =
    useContactStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ name, email, message });
    resetForm();
  };

  return (
    <div className='flex flex-col justify-center w-[96%] lg:w-[88%] xl:w-[85%] gap-2 pt-9 md:pt-20'>
      <div className='flex flex-col md:flex-row gap-11 lg:gap-36'>
        <div className='md:w-2/5 p-2'>
          <HeaderWithBranding isStart heading={`Let's Talk`} subHeading='' />
          <div className='text-headerLinkColor text-sm font-normal pt-2'>
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </div>
          <p className='text-stepsText text-lg font-medium pt-6 md:pt-9'>
            Email
          </p>
          <p className='text-headerLinkColor text-sm font-normal pt-2'>
            meracars@gmail.com
          </p>
          <p className='text-stepsText text-lg font-medium pt-9 md:pt-11'>
            Socials
          </p>
          <div className='flex pt-2'>
            <Socials notFooter />
          </div>
        </div>
        <div className='md:w-1/2 p-2'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <ContactInput
              value={name}
              onChange={setName}
              required
              label='Name'
            />
            <ContactInput
              value={email}
              onChange={setEmail}
              required
              label='Email'
            />
            <ContactInput
              value={message}
              onChange={setMessage}
              required
              isMessage
              label='Message'
            />
            <div className='pt-5'>
              <Button
                type='submit'
                className='w-full bg-bannerChipText p-2 text-white rounded-lg justify-center h-16'
                rightIcon={GrFormNextLink}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
