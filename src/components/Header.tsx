import React, { useState } from 'react';
import BtnDrawerMenu from '@/assets/svgs/btn-drawer-menu.svg?react';
import HeaderDrawerMenu from '@/components/HeaderDrawerMenu';
import HeaderNavbarMenu from '@/components/HeaderNavbarMenu';
import HeaderLogo from '@/components/HeaderLogo';
import BtnClose from '@/assets/svgs/btn-close.svg?react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // 메뉴오픈여부

  const toggleDrawerMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <nav className="c-header flex justify-between bg-white text-sm">
        <div className="flex w-full">
          <HeaderLogo />
          <div className="hidden w-full sm:flex"></div>
          <HeaderNavbarMenu />
        </div>
        <button className="sm:hidden" onClick={toggleDrawerMenu}>
          {open ? (
            <BtnClose className="mx-4" width={20} height={20} />
          ) : (
            <BtnDrawerMenu className="mx-4" width={20} height={20} />
          )}
        </button>
      </nav>
      <div className="h-15"></div>
      <HeaderDrawerMenu open={open} />
    </>
  );
};

export default Header;
