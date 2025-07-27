import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbarMenu: React.FC = () => {
  return (
    <>
      <ul className="text-ourTextBlack my-auto hidden sm:flex">
        <li>
          {/* 시작하기 */}
          <Link className="c-nav-menu-item" to={'/start'}>
            시작하기
          </Link>
        </li>
        <li>
          {/* 다운로드 */}
          <Link className="c-nav-menu-item" to={'/download'}>
            다운로드
          </Link>
        </li>
        <li>
          {/* 문의하기 */}
          <Link className="c-nav-menu-item" to="mailto:dhtmxk8134@naver.com">
            문의하기
          </Link>
        </li>
      </ul>
      <button className="border-ourBlue bg-ourBlue mx-2 my-auto hidden h-fit cursor-pointer rounded-lg border-1 px-1.5 py-1 whitespace-nowrap text-white sm:flex">
        한국어
        {/* 한국어 */}
      </button>
    </>
  );
};

export default HeaderNavbarMenu;
