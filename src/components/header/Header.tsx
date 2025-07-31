import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BtnDrawerMenu from '@/assets/svgs/btn-drawer-menu.svg?react';
import HeaderDrawerMenu from '@/components/header/HeaderDrawerMenu';
import HeaderNavbarMenu from '@/components/header/HeaderNavbarMenu';
import HeaderLogo from '@/components/header/HeaderLogo';
import BtnClose from '@/assets/svgs/btn-close.svg?react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // 메뉴오픈여부
  const location = useLocation(); // 현재 라우터의 위치

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleDrawerMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 z-100 my-auto flex h-15 w-full justify-center border-b border-gray-200 bg-white whitespace-nowrap">
        <nav className="mx-auto flex w-dvw justify-between bg-white text-sm sm:w-[1140px] sm:max-w-[1140px]">
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
