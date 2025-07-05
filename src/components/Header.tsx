import React from "react";
import logo from "@/assets/images/logo.png";

interface HeaderProps {
  headerProps: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <nav className="c-header flex justify-between text-sm">
        <div className="flex">
          <div className="mx-2 flex cursor-pointer items-center px-3 py-2">
            <img className="mx-2 h-6 w-6" src={logo} alt="logo" />{" "}
            <span className="text- text-xl font-semibold">온말</span>
          </div>
          <ul className="text-ourTextBlack flex">
            <li className="c-menu-item">시작하기</li>
            <li className="c-menu-item">다운로드</li>
            <li className="c-menu-item">문의하기</li>
          </ul>
        </div>
        <div className="border-ourBlue bg-ourBlue mx-2 cursor-pointer rounded-lg border-1 px-1.5 py-1 whitespace-nowrap text-white hover:brightness-110">
          한국어
        </div>

        {/* 아래 화살표 추가 */}
      </nav>
      <div className="h-15"></div>
    </>
  );
};

export default Header;
