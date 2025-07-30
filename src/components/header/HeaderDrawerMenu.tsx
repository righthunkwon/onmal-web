import React from 'react';
import { Link } from 'react-router-dom';

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
          <li className="c-drawer-menu-item">
            <Link to={'/start'} className="block w-full">
              시작하기
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
