import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <div className="pb-12 sm:pb-32"></div>
      <div className="animate-fade-in mx-auto text-center">
        <div className="mb-8 text-3xl leading-tight font-semibold sm:mb-12 sm:text-6xl">
          바로 적용하는 다국어
          <br /> 온말에서 쉽고 간편하게
        </div>

        <div className="flex justify-center gap-2 sm:text-xl">
          {/* 최신버전 다운로드 */}
          <button className="bg-ourBlue rounded-lg px-4 py-2 text-white">
            다운로드
          </button>
          {/* 다운로드 페이지로 이동 */}
          <button className="text-ourTextBlue border-ourBlue rounded-lg border-1 px-4 py-2">
            살펴보기
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
