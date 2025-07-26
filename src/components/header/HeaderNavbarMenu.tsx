import React from 'react';

const HeaderNavbarMenu: React.FC = () => {
  return (
    <>
      <ul className="text-ourTextBlack hidden sm:flex">
        <li className="c-nav-menu-item">시작하기</li> {/* 시작하기 */}
        <li className="c-nav-menu-item">다운로드</li> {/* 다운로드 */}
        <li className="c-nav-menu-item">
          <a href="mailto:dhtmxk8134@naver.com">문의하기</a> {/* 문의하기 */}
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
