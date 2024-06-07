'use client';

import React from 'react';
import { useFormStore } from '@/lib/store/useFormStore';
import Socials from '@/components/links/Socials';

const ContactForm: React.FC = () => {
  const { name, email, message, setName, setEmail, setMessage, resetForm } =
    useFormStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
    resetForm();
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 p-2'>
        <h2 className='text-2xl font-bold mb-4'>Let's Talk</h2>
        <p className='mb-4'>
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help.
        </p>
        <p className='font-semibold mb-2'>Email</p>
        <p className='mb-4'>meracars@gmail.com</p>
        <p className='font-semibold mb-2'>Socials</p>
      </div>
      <div className='md:w-1/2 p-2'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='block font-semibold mb-2'>
              Name
            </label>
            <input
              id='name'
              type='text'
              className='w-full p-2 border border-gray-300 rounded-lg'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block font-semibold mb-2'>
              Email
            </label>
            <input
              id='email'
              type='email'
              className='w-full p-2 border border-gray-300 rounded-lg'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block font-semibold mb-2'>
              Message
            </label>
            <textarea
              id='message'
              className='w-full p-2 border border-gray-300 rounded-lg'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
