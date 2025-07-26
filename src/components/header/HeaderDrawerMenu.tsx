import React from 'react';

interface HeaderDrawerMenuProps {
  open: boolean;
}

const HeaderDrawerMenu: React.FC<HeaderDrawerMenuProps> = ({ open }) => {
  return (
    <>
      <div
        className={`border-ourGray fixed z-99 w-full overflow-hidden bg-white transition-all duration-500 sm:hidden ${open ? 'fixed top-15 max-h-48 translate-y-0' : 'max-h-0 -translate-y-2'}`}
      >
        <ul className="text-ourTextBlack">
          <li className="c-drawer-menu-item">시작하기</li>
          <li className="c-drawer-menu-item">다운로드</li>
          <li className="c-drawer-menu-item">
            <a href="mailto:dhtmxk8134@naver.com">문의하기</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderDrawerMenu;
