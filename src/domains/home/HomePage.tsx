import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const handleClickDownload = () => {
    alert('다운로드');
  };

  return (
    <>
      <div className="flex min-h-[calc(100vh)] flex-col pt-12 sm:pt-32">
        <div className="flex-1 mx-auto text-center animate-fade-in">
          <div className="mb-8 text-3xl font-semibold leading-tight sm:mb-12 sm:text-6xl">
            바로 적용하는 다국어
            <br /> 온말에서 쉽고 간편하게
          </div>

          <div className="flex justify-center gap-2 sm:text-xl">
            {/* 최신버전 다운로드 */}
            <button
              onClick={handleClickDownload}
              className="px-4 py-2 text-white rounded-lg bg-ourBlue hover:bg-ourEventBlueDark hover:cursor-pointer"
            >
              다운로드
            </button>
            {/* 시작하기 페이지로 이동 */}
            <Link
              to={'/start'}
              className="px-4 py-2 rounded-lg text-ourTextBlue border-ourGray hover:text-ourEventBlueDark border-1 hover:cursor-pointer hover:border-black"
            >
              살펴보기
            </Link>
          </div>
        </div>
        <div className="h-12 bg-red-200">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
