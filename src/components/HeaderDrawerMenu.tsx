import React from 'react';

interface HeaderDrawerMenuProps {
  open: boolean;
}

const HeaderDrawerMenu: React.FC<HeaderDrawerMenuProps> = ({ open }) => {
  return (
    <>
      <div
        className={`border-ourGray w-full overflow-hidden border-b-1 bg-white transition-all duration-400 sm:hidden ${open ? 'fixed top-15 max-h-48 translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'}`}
      >
        <ul className="text-ourTextBlack">
          <li className="c-drawer-menu-item">시작하기</li>
          <li className="c-drawer-menu-item">다운로드</li>
          <li className="c-drawer-menu-item">문의하기</li>
        </ul>
      </div>
    </>
  );
};

export default HeaderDrawerMenu;
