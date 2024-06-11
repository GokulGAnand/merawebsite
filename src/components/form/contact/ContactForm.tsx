'use client';

import React from 'react';
import { useFormStore } from '@/lib/store/useFormStore';
import Socials from '@/components/links/Socials';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import Button from '@/components/buttons/Button';
import { GrFormNextLink } from 'react-icons/gr';

const ContactForm: React.FC = () => {
  const { name, email, message, setName, setEmail, setMessage, resetForm } =
    useFormStore();

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
            <div>
              <label
                htmlFor='name'
                className='text-stepsText font-medium text-sm'
              >
                Name
              </label>
              <div className='pt-4'>
                <input
                  id='name'
                  type='text'
                  className='w-full p-2 border-contactFormBackgroundColor bg-contactFormBackgroundColor rounded-lg pt-4'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='text-stepsText font-medium text-sm pt-8'
              >
                Email
              </label>
              <div className='pt-4'>
                <input
                  id='email'
                  type='email'
                  className='w-full p-2 border-contactFormBackgroundColor bg-contactFormBackgroundColor rounded-lg pt-4'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='message'
                className='text-stepsText font-medium text-sm pt-8'
              >
                Message
              </label>
              <div className='pt-4'>
                <textarea
                  id='message'
                  className='w-full p-2 border-contactFormBackgroundColor bg-contactFormBackgroundColor rounded-lg h-40'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div className='pt-9'>
              <Button
                type='submit'
                className='w-full bg-bannerChipText text-white p-2 rounded-lg justify-center h-16'
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
