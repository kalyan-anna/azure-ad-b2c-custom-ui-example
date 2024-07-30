import { SessionDetails } from '@/components/SessionDetails';
import React from 'react';

export const AccountPage = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 border-2 border-purple-600 rounded-2xl'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
          This is an authenticated page
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48'>
          This page is exclusively accessible to authenticated users. To view its contents, you must be logged in with
          valid credentials.
        </p>
      </div>
      <SessionDetails />
    </section>
  );
};

export default AccountPage;
