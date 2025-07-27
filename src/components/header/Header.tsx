import React, { useState } from 'react';
import BtnDrawerMenu from '@/assets/svgs/btn-drawer-menu.svg?react';
import HeaderDrawerMenu from '@/components/header/HeaderDrawerMenu';
import HeaderNavbarMenu from '@/components/header/HeaderNavbarMenu';
import HeaderLogo from '@/components/header/HeaderLogo';
import BtnClose from '@/assets/svgs/btn-close.svg?react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // 메뉴오픈여부

  const toggleDrawerMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <header className="fixed top-0 z-100 my-auto flex h-15 w-full justify-center border-b border-gray-200 bg-white whitespace-nowrap">
        <nav className="c-content flex justify-between bg-white text-sm">
          <div className="flex w-full">
            <HeaderLogo />
            <div className="hidden w-full sm:flex"></div>
            <HeaderNavbarMenu />
          </div>
          <button className="sm:hidden" onClick={toggleDrawerMenu}>
            {open ? (
              <BtnClose
                className="mx-4 hover:cursor-pointer"
                width={20}
                height={20}
              />
            ) : (
              <BtnDrawerMenu
                className="mx-4 hover:cursor-pointer"
                width={20}
                height={20}
              />
            )}
          </button>
        </nav>
        <HeaderDrawerMenu open={open} />
      </header>
    </>
  );
};

export default Header;
