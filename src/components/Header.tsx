import React, { useState } from 'react';
import logo from '@/assets/images/logo.png';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // 메뉴오픈여부

  /**
   * 드로어 메뉴 버튼
   */
  const renderDrawerMenu = () => (
    <button className="sm:hidden" onClick={() => setOpen((open) => !open)}>
      {open ? 'X' : '■'}
    </button>
  );

  return (
    <>
      <nav className="c-header flex justify-between bg-white text-sm">
        <div className="flex w-full">
          <div className="mx-2 flex cursor-pointer items-center px-3 py-2">
            <img className="mx-2 h-6 w-6" src={logo} alt="logo" />
            <span className="text- text-xl font-semibold">온말</span>
          </div>
          <div className="hidden w-full bg-red-200 sm:flex"></div>
          <ul className="text-ourTextBlack hidden sm:flex">
            <li className="c-menu-item">시작하기</li> {/* 시작하기 */}
            <li className="c-menu-item">다운로드</li> {/* 다운로드 */}
            <li className="c-menu-item">문의하기</li> {/* 문의하기 */}
          </ul>
          <button className="border-ourBlue bg-ourBlue mx-2 my-auto hidden h-fit cursor-pointer rounded-lg border-1 px-1.5 py-1 whitespace-nowrap text-white sm:flex">
            한국어
          </button>
        </div>
        {renderDrawerMenu()}
      </nav>
      <div className="h-15"></div>
      {open && (
        <ul className="text-ourTextBlack sm:hidden">
          <li className="c-menu-item">시작하기</li> {/* 시작하기 */}
          <li className="c-menu-item">다운로드</li> {/* 다운로드 */}
          <li className="c-menu-item">문의하기</li> {/* 문의하기 */}
        </ul>
      )}
    </>
  );
};

export default Header;
