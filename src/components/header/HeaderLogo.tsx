import React from 'react';
import logo from '@/assets/svgs/logo.svg';
import { Link } from 'react-router-dom';

const HeaderLogo: React.FC = () => {
  return (
    <>
      <Link
        to={'/'}
        className="flex cursor-pointer items-center justify-center gap-1 px-6 py-2 sm:ml-6"
      >
        <img className="h-6 w-6" src={logo} alt="logo" />
        <span className="text-xl font-semibold">온말</span>
      </Link>
    </>
  );
};

export default HeaderLogo;
