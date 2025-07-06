import React from 'react';
import logo from '@/assets/images/logo.png';

const HeaderLogo: React.FC = () => {
  return (
    <>
      <div className="mx-2 flex cursor-pointer items-center px-3 py-2">
        <img className="mx-2 h-6 w-6" src={logo} alt="logo" />
        <span className="text- text-xl font-semibold">온말</span>
      </div>
    </>
  );
};

export default HeaderLogo;
