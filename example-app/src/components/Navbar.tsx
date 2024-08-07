'use client';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  onSignInClick: () => void;
  onSignOutClick: () => void;
  isAuthenticated: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onSignInClick, onSignOutClick, isAuthenticated }) => {
  return (
    <div className='w-full bg-slate-400'>
      <nav className='container relative flex items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        <div className='flex flex-wrap items-center justify-between w-auto'>
          <Link href='/'>
            <span className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
              <span>
                <Image src='/img/logo.svg' alt='N' width='32' height='32' className='w-8' />
              </span>
              <span>Authly</span>
            </span>
          </Link>
        </div>

        <div className='mr-3 space-x-4 flex nav__item'>
          {isAuthenticated ? (
            <button onClick={onSignOutClick} className='px-6 py-2 text-white bg-indigo-600 rounded-md ml-5'>
              Sign out
            </button>
          ) : (
            <button onClick={onSignInClick} className='px-6 py-2 text-white bg-indigo-600 rounded-md ml-5'>
              Sign in
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
