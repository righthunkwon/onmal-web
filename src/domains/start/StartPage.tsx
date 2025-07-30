import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';

const StartPage: React.FC = () => {
  usePageTitle('시작하기 | 온말');

  return (
    <>
      <div className="pb-12 sm:pb-32"></div>
      <div className="mx-auto text-center">
        <div className="mb-8 text-3xl leading-tight font-semibold sm:mb-12 sm:text-6xl">
          시작하기 페이지
        </div>

        <div className="flex justify-center gap-2 sm:text-xl">
          {/* 최신버전 다운로드 */}
          <button className="bg-ourBlue hover:bg-ourEventBlueDark rounded-lg px-4 py-2 text-white hover:cursor-pointer">
            다운로드
          </button>
          {/* 다운로드 페이지로 이동 */}
          <button className="text-ourTextBlue border-ourGray hover:text-ourEventBlueDark rounded-lg border-1 px-4 py-2 hover:cursor-pointer hover:border-black">
            살펴보기
          </button>
        </div>
      </div>
    </>
  );
};

export default StartPage;
