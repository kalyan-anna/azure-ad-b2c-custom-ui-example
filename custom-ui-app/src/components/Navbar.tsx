'use client';

export const Navbar = () => {
  return (
    <div className='w-full bg-slate-400'>
      <nav className='container relative flex items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        <div className='flex flex-wrap items-center justify-between w-auto'>
          <a href='/'>
            <span className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
              <span>
                <img src='/img/logo.svg' alt='N' width='32' height='32' className='w-8' />
              </span>
              <span>Authly</span>
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};
