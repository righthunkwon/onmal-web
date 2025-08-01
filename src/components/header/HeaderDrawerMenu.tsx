import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderDrawerMenuProps {
  open: boolean;
}

const HeaderDrawerMenu: React.FC<HeaderDrawerMenuProps> = ({ open }) => {
  return (
    <>
      <div
        className={`border-ourGray fixed z-99 w-full overflow-hidden bg-white transition-all duration-400 sm:hidden ${open ? 'pointer-events-auto top-15 translate-y-0 opacity-100' : 'pointer-events-none top-15 -translate-y-2 opacity-0'} `}
      >
        <ul className="text-ourTextBlack">
          <li className="c-drawer-menu-item">
            <Link to={'/notice'} className="block w-full">
              공지사항
            </Link>
          </li>
          <li className="c-drawer-menu-item">
            <Link to={'/download'} className="block w-full">
              다운로드
            </Link>
          </li>
          <li className="c-drawer-menu-item">
            <Link to={'/support'} className="block w-full">
              문의하기
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderDrawerMenu;
